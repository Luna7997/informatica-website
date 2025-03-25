/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['avatars.githubusercontent.com', 'images.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ['mongoose'],
    optimizeCss: true,
    optimizeFonts: true,
  },
};

export default nextConfig;