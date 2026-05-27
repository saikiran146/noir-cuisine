import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["snowdrop-sedan-dreadful.ngrok-free.dev"],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
