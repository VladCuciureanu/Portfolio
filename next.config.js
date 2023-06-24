/** @type {import('next').NextConfig} */
const nextConfig = {
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
