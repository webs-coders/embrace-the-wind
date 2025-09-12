import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Required for static export
  output: 'export',
  trailingSlash: true,

  // Required for images to work without Next.js optimization
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },

  reactStrictMode: true,
};

export default nextConfig;
