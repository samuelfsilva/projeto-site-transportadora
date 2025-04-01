import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  allowedDevOrigins: ["http://localhost:3000"],
  assetPrefix: process.env.NEXT_PUBLIC_REPOSITORY_URL,
};

export default nextConfig;
