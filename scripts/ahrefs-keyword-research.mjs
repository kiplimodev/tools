#!/usr/bin/env node
/**
 * Ahrefs Keyword Research Script
 * Fetches volume + KD for all target keywords via Ahrefs API v3
 *
 * Usage:
 *   AHREFS_API_KEY=your_token node scripts/ahrefs-keyword-research.mjs
 *   AHREFS_API_KEY=your_token node scripts/ahrefs-keyword-research.mjs --country gb
 *   AHREFS_API_KEY=your_token node scripts/ahrefs-keyword-research.mjs --csv
 */

const API_KEY = process.env.AHREFS_API_KEY;
const args = process.argv.slice(2);
const country = args.includes("--country") ? args[args.indexOf("--country") + 1] : "us";
const csvMode = args.includes("--csv");

if (!API_KEY) {
  console.error("Error: AHREFS_API_KEY environment variable is not set.");
  console.error("Usage: AHREFS_API_KEY=your_token node scripts/ahrefs-keyword-research.mjs");
  process.exit(1);
}

// All 31 target keywords grouped by category
const KEYWORDS = {
  Running: [
    "running pace calculator",
    "vdot calculator",
    "interval training calculator",
    "running splits calculator",
    "race time predictor",
  ],
  Calories: [
    "rowing calories calculator",
    "swimming calories calculator",
    "treadmill calorie calculator",
    "walking calorie calculator",
    "calories burned running calculator",
    "bike calories calculator",
    "steps to calories calculator",
  ],
  "Body Composition": [
    "body fat calculator",
    "lean body mass calculator",
    "bmi calculator",
    "ideal weight calculator",
    "waist to hip ratio calculator",
    "body recomposition calculator",
  ],
  Strength: [
    "barbell calculator",
    "powerlifting calculator",
    "1 rep max calculator",
    "training volume calculator",
    "rpe calculator",
    "strength ratio calculator",
  ],
  Nutrition: [
    "tdee calculator",
    "intermittent fasting calculator",
    "bulk calculator",
    "creatine calculator",
    "protein powder calculator",
    "fat intake calculator",
  ],
  "Calisthenics / Activity": [
    "push up calculator",
    "pull up calculator",
    "steps per day calculator",
  ],
};

const ALL_KEYWORDS = Object.values(KEYWORDS).flat();

async function fetchKeywordMetrics(keywords) {
  const url = new URL("https://api.ahrefs.com/v3/keywords-explorer/overview");

  // Ahrefs v3 API: keywords passed as repeated query params
  url.searchParams.set("country", country);
  url.searchParams.set("select", "keyword,volume,difficulty");
  for (const kw of keywords) {
    url.searchParams.append("keywords[]", kw);
  }

  const res = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      Accept: "application/json",
    },
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Ahrefs API error ${res.status}: ${body}`);
  }

  return res.json();
}

function kdLabel(kd) {
  if (kd == null) return "—";
  if (kd <= 10) return "Very Easy";
  if (kd <= 20) return "Easy";
  if (kd <= 30) return "Possible";
  if (kd <= 50) return "Medium";
  if (kd <= 70) return "Hard";
  return "Very Hard";
}

function fmtVolume(v) {
  if (v == null) return "—";
  if (v >= 1_000_000) return `${(v / 1_000_000).toFixed(1)}M`;
  if (v >= 1_000) return `${(v / 1_000).toFixed(1)}K`;
  return String(v);
}

async function main() {
  console.log(`\nFetching metrics for ${ALL_KEYWORDS.length} keywords (country: ${country.toUpperCase()})...\n`);

  // Ahrefs allows up to 1000 keywords per request — we send all at once
  const data = await fetchKeywordMetrics(ALL_KEYWORDS);

  // Build a lookup map: keyword → { volume, difficulty }
  const metrics = {};
  for (const row of data?.keywords ?? []) {
    metrics[row.keyword.toLowerCase()] = {
      volume: row.volume,
      kd: row.difficulty,
    };
  }

  if (csvMode) {
    // CSV output
    const lines = ["Category,Keyword,Volume,KD,Difficulty"];
    for (const [category, keywords] of Object.entries(KEYWORDS)) {
      for (const kw of keywords) {
        const m = metrics[kw.toLowerCase()] ?? {};
        lines.push(`"${category}","${kw}",${m.volume ?? ""},${m.kd ?? ""},"${kdLabel(m.kd)}"`);
      }
    }
    console.log(lines.join("\n"));
    return;
  }

  // Table output
  for (const [category, keywords] of Object.entries(KEYWORDS)) {
    console.log(`── ${category} ${"─".repeat(Math.max(0, 50 - category.length))}`);

    const rows = keywords.map((kw) => {
      const m = metrics[kw.toLowerCase()] ?? {};
      return { kw, volume: fmtVolume(m.volume), kd: m.kd ?? "—", label: kdLabel(m.kd) };
    });

    // Sort by volume descending within each category
    rows.sort((a, b) => {
      const va = metrics[a.kw.toLowerCase()]?.volume ?? -1;
      const vb = metrics[b.kw.toLowerCase()]?.volume ?? -1;
      return vb - va;
    });

    const kwWidth = Math.max(...rows.map((r) => r.kw.length), 20);
    console.log(`  ${"Keyword".padEnd(kwWidth)}  ${"Volume".padStart(8)}  ${"KD".padStart(4)}  Difficulty`);
    console.log(`  ${"─".repeat(kwWidth)}  ${"─".repeat(8)}  ${"─".repeat(4)}  ${"─".repeat(12)}`);
    for (const row of rows) {
      console.log(`  ${row.kw.padEnd(kwWidth)}  ${row.volume.padStart(8)}  ${String(row.kd).padStart(4)}  ${row.label}`);
    }
    console.log();
  }

  // Summary: top opportunities (high volume, low KD)
  console.log("── Top Opportunities (Volume ≥ 1K, KD ≤ 30) ─────────────────────\n");
  const opportunities = ALL_KEYWORDS
    .map((kw) => ({ kw, ...( metrics[kw.toLowerCase()] ?? {}) }))
    .filter((r) => (r.volume ?? 0) >= 1000 && (r.kd ?? 999) <= 30)
    .sort((a, b) => (b.volume ?? 0) - (a.volume ?? 0));

  if (opportunities.length === 0) {
    console.log("  No keywords matched the threshold.\n");
  } else {
    const kwWidth = Math.max(...opportunities.map((r) => r.kw.length), 20);
    console.log(`  ${"Keyword".padEnd(kwWidth)}  ${"Volume".padStart(8)}  ${"KD".padStart(4)}  Difficulty`);
    console.log(`  ${"─".repeat(kwWidth)}  ${"─".repeat(8)}  ${"─".repeat(4)}  ${"─".repeat(12)}`);
    for (const r of opportunities) {
      console.log(`  ${r.kw.padEnd(kwWidth)}  ${fmtVolume(r.volume).padStart(8)}  ${String(r.kd).padStart(4)}  ${kdLabel(r.kd)}`);
    }
    console.log();
  }
}

main().catch((err) => {
  console.error("\nFailed:", err.message);
  process.exit(1);
});
