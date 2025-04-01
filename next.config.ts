import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  allowedDevOrigins: ["http://localhost:3000"],
  basePath: "https://samuelfsilva.github.io/projeto-site-transportadora/",
};

export default nextConfig;
