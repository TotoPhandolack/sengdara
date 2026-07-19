import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pin the workspace root to this folder. A stray package-lock.json in the
  // parent (E:\Projects) made Next infer the wrong root and warn on every boot.
  turbopack: {
    root: path.resolve(),
  },
};

export default nextConfig;
