import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  test: {
    environment: "node",
    include: [
      "src/lib/calculators/**/test.ts",
      "src/lib/calculators/**/*.test.ts",
      "src/tests/**/*.test.ts",
    ],
    exclude: ["node_modules", ".next"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
