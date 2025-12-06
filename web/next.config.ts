import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    externalDir: true,
    turbo: {
      resolveAlias: {
        "@tools": path.resolve(__dirname, ".."),
      },
    },
  },
  webpack: (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      "@tools": path.resolve(__dirname, ".."),
    };

    return config;
  },
  outputFileTracingRoot: path.resolve(__dirname, ".."),
};

export default nextConfig;
