import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/riseatseven',
  assetPrefix: '/riseatseven/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;