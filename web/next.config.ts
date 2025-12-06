import path from "path";
import type { NextConfig } from "next";

const aliasPaths = {
  "@": path.resolve(__dirname, "src"),
  "@/registry": path.resolve(__dirname, "..", "registry"),
  "@registry": path.resolve(__dirname, "..", "registry"),
  "@tools": path.resolve(__dirname, "..", "registry"),
};

const nextConfig: NextConfig = {
  experimental: {
    externalDir: true,
    turbo: {
      resolveAlias: aliasPaths,
    },
  },
  turbopack: {
    root: "..",
  },
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
