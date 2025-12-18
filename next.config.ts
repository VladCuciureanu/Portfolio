import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: () => [
    {
      source: "/resume",
      destination: "/documents/VLAD_CUCIUREANU_CV.pdf",
      permanent: true,
    },
  ],
};

export default nextConfig;
