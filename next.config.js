/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: () => [
    {
      source: "/resume",
      destination: "/documents/VLAD CUCIUREANU CV.pdf",
      permanent: true,
    },
  ],
};

module.exports = nextConfig;
