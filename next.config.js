/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
      NEXT_PUBLIC_MAPBOX_API_TOKEN: process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN,
      NEXT_PUBLIC_OPEN_WEATHER_API_KEY: process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY
  },
}

module.exports = nextConfig
