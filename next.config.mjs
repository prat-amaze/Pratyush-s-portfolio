/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'courses.wesbos.com' },
      { protocol: 'https', hostname: 'i.pinimg.com' },
    ],
  },
};

export default nextConfig;
