/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbopackUseSystemTlsCerts: true,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'courses.wesbos.com' },
      { protocol: 'https', hostname: 'i.pinimg.com' },
    ],
  },
};

export default nextConfig;
