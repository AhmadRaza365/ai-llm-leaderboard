/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "t0.gstatic.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "d1p5uk4xvcey2q.cloudfront.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
}

export default nextConfig
