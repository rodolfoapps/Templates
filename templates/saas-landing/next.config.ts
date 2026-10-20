import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@templates/ui", "@templates/registry"],
  reactStrictMode: true,
};

export default nextConfig;
