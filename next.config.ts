import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pin the workspace root to this folder. A stray package-lock.json in the
  // parent (E:\Projects) made Next infer the wrong root and warn on every boot.
  turbopack: {
    root: path.resolve(),
  },
  // Disable streaming metadata. Next streams metadata into a `<div hidden>`
  // (MetadataWrapper) after the initial HTML, which races hydration in dev and
  // throws "Hydration failed… server rendered HTML didn't match the client".
  // Treating every UA as HTML-limited forces blocking metadata straight into
  // <head>, removing the wrapper and the mismatch. Our metadata is static, so
  // there's no TTFB cost.
  htmlLimitedBots: /.*/,
};

export default nextConfig;
