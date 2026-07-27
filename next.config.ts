import type { NextConfig } from "next";
import { redirects as redirectMap } from "./src/content/site";

const nextConfig: NextConfig = {
  async redirects() {
    return redirectMap;
  },
};

export default nextConfig;
