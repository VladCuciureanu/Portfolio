const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = withContentlayer({
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
  images: { domains: [] },
  async redirects() {
    return [
      {
        source: "/resume",
        destination: "/documents/VLAD_CUCIUREANU_CV.pdf",
        permanent: true,
      },
      {
        source: "/secret",
        destination: "/zelda",
        permanent: true,
      },
    ];
  },
});

module.exports = withContentlayer(nextConfig);
