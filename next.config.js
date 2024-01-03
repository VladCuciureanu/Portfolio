/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
  redirects: () => [
    {
      source: "/resume",
      destination: "/documents/VLAD_CUCIUREANU_CV.pdf",
      permanent: true,
    },
  ],
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
