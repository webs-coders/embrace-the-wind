import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'], // Enables modern formats
    domains: ['images.pexels.com'],        // External image host allowed
  },
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
