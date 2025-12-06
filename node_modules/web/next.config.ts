import path from "path";
import type { NextConfig } from "next";

const monorepoRoot = path.resolve(__dirname, "..");

const aliasPaths = {
  "@": path.resolve(__dirname, "src"),
  "@registry": path.resolve(monorepoRoot, "registry"),
  "@tools": path.resolve(monorepoRoot, "registry"),
};

const nextConfig: NextConfig = {
  experimental: {
    externalDir: true,
    turbo: {
      resolveAlias: aliasPaths,
    },
  },
  turbopack: {
    root: monorepoRoot,
  },
  transpilePackages: [],
  webpack: (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      ...aliasPaths,
    };

    return config;
  },
};

export default nextConfig;
