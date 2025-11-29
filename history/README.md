# HistoryMosaic

This directory contains the materials for the HistoryMosaic automation pipeline, including validated event data, prompts, and architectural guidance for producing fact-checked social posts.

## Contents
- `1963-08-28-march-on-washington.json` — validator-safe event payload for the March on Washington.
- `ARCHITECTURE.md` — blueprint for the serverless, cron-driven posting pipeline with prompt cascade and logging guidance.
- `prompts/` — modular prompt set for extraction, source fetching, validation, rewrite for X, and scheduling; each file includes guardrails and formatting rules.

## Usage
1. Wire the prompts into the `src/` modules outlined in `ARCHITECTURE.md` (extract, fetch, validate, rewrite, schedule, and autopost).
2. Store future events in `events/` following the same JSON schema used in the March on Washington file.
3. Run the validator before posting; only publish outputs that pass validation.
4. Keep prompt versions under `prompts/versions/` when iterating, promoting stable sets for production use.

## Next Steps
- Add `.env.example` entries for API keys and cron settings when hooking into OpenAI/Anthropic and the X API.
- Implement `tests/test_pipeline.py` to exercise the full cascade with fixtures from `events/`.
- Configure serverless cron (e.g., Cloudflare Workers Cron or Vercel Cron) to trigger the daily autopost routine.
