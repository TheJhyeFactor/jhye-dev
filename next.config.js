/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  basePath: '/jhye-dev',
  assetPrefix: '/jhye-dev',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
