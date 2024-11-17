/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "random-image-pepebigotes.vercel.app",
        port: "",
        pathname: "/api/random-image",
      },
    ],
  },
};

export default nextConfig;
