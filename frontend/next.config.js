/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // Disable webpack cache to fix the snapshot resolve dependencies error
    webpackBuildWorker: false
  }
}

module.exports = nextConfig
