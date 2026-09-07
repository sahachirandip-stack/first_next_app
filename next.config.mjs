/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'digitalagencynetwork.online',
        port: '',
        pathname: '/zt/**',
      },
    ],
  },
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;
