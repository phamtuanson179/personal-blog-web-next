/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img-cdn.pixlr.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
