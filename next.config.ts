import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",         // allow any port
        pathname: "/**",  // allow ALL paths
      },
    ],
  },
};

export default nextConfig;
