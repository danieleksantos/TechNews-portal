/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com', // Adicionando explicitamente o subdomínio do print
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig;