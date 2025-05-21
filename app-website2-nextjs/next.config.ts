import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: '/y2025',
  assetPrefix: '/y2025',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
