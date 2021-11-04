/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [process.env.NEXT_TARGET_DOMAIN],
  },
}
