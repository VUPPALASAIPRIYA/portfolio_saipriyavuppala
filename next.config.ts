import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['upload.wikimedia.org'], 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '', // Leave empty if not needed
        pathname: '/**', // Allow all paths under this hostname
      },
      // Add other hostnames if needed
    ],
  },
  
  // Any other config options
};

export default nextConfig; // Use export default for ES modules syntax
