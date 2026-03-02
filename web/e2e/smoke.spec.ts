/**
 * Smoke tests — verify every tool URL loads without error.
 *
 * These tests do NOT assert UI behaviour; they only confirm:
 *  1. The page returns HTTP 200
 *  2. No uncaught JavaScript errors occur during load
 *  3. The page title is set (basic metadata sanity check)
 *
 * Run locally after `npm run build && npm run start`:
 *   npx playwright test
 *
 * In CI the webServer config in playwright.config.ts starts the server automatically.
 */

import { test, expect } from "@playwright/test";

// ── Static / infrastructure pages ────────────────────────────────────────────

const STATIC_PAGES = [
  { path: "/", titleContains: "Denstar" },
  { path: "/tools", titleContains: "Denstar" },
  { path: "/sitemap.xml", titleContains: null },
  { path: "/robots.txt", titleContains: null },
];

for (const { path, titleContains } of STATIC_PAGES) {
  test(`static: ${path}`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (err) => errors.push(err.message));

    const response = await page.goto(path);
    expect(response?.status()).toBe(200);

    if (titleContains) {
      await expect(page).toHaveTitle(new RegExp(titleContains, "i"));
    }

    expect(errors, `JS errors on ${path}`).toHaveLength(0);
  });
}

// ── Tool pages (from registry) ────────────────────────────────────────────────

const TOOL_PATHS = [
  // Running
  "/tools/running/running-pace-calculator",
  "/tools/running/vdot-calculator",
  "/tools/running/interval-calculator",
  "/tools/running/running-splits-calculator",
  "/tools/running/split-calculator",
  "/tools/running/vo2max",
  // Nutrition
  "/tools/nutrition/tdee-calculator",
  "/tools/nutrition/bulk-calculator",
  "/tools/nutrition/lean-bulk-calculator",
  "/tools/nutrition/fat-intake-calculator",
  "/tools/nutrition/creatine-calculator",
  "/tools/nutrition/intermittent-fasting-calculator",
  "/tools/nutrition/protein-powder-calculator",
  // Body composition
  "/tools/body-composition/bmi-calculator",
  "/tools/body-composition/waist-to-height-ratio-calculator",
  // Planners / Trackers (ComingSoon stubs)
  "/tools/planners/meal-plan-generator",
  "/tools/planners/workout-generator",
  "/tools/trackers/weight-tracker",
  "/tools/calisthenics/home-workout-generator",
];

for (const path of TOOL_PATHS) {
  test(`tool: ${path}`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (err) => errors.push(err.message));

    const response = await page.goto(path);
    expect(response?.status(), `${path} should return 200`).toBe(200);

    // Every tool page must show the Denstar brand in the title
    await expect(page).toHaveTitle(/Denstar/i);

    expect(errors, `JS errors on ${path}`).toHaveLength(0);
  });
}

// ── OG image API ──────────────────────────────────────────────────────────────

test("api: /api/og returns an image", async ({ request }) => {
  const res = await request.get("/api/og?tool=tdee-calculator");
  expect(res.status()).toBe(200);
  expect(res.headers()["content-type"]).toMatch(/^image\//);
});

test("api: /api/og with no slug falls back gracefully", async ({ request }) => {
  const res = await request.get("/api/og");
  expect(res.status()).toBe(200);
  expect(res.headers()["content-type"]).toMatch(/^image\//);
});
