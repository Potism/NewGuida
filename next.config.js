/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "via.placeholder.com"],
  },
  // Compress images
  compress: true,
  // Enable React strict mode
  reactStrictMode: true,
};

module.exports = nextConfig;
