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
    ],
  },
}

export default nextConfig
