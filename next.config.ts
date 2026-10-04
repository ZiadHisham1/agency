import type { NextConfig } from "next";

// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "i.ytimg.com",    pathname: "/**" },
    { protocol: "https", hostname: "img.youtube.com", pathname: "/**" },
    { protocol: "https", hostname: "cdn.sanity.io",   pathname: "/**" },
    ],
  },
};

module.exports = nextConfig;

export default nextConfig;
