/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
  async redirects() {
    return [
      {
        source: "/resume",
        destination: "/documents/VLAD_CUCIUREANU_CV.pdf",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
