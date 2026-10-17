import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: process.env.GITHUB_ACTIONS ? "/KrishiSahay_Team_Vertex_website_starter" : ""
};
export default nextConfig;
