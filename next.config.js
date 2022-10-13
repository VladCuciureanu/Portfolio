const { withContentlayer } = require("next-contentlayer")

/**
 * @type {import('next').NextConfig}
 */
module.exports = withContentlayer({
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: "/resume",
        destination: "/documents/VLAD_CUCIUREANU_CV.pdf",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/VladCuciureanu",
        permanent: true,
      },
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/in/vladcuciureanu/",
        permanent: true,
      },
      {
        source: "/twitter",
        destination: "https://twitter.com/VladinskiDev",
        permanent: true,
      },
      {
        source: "/lyra",
        destination: "https://github.com/VladCuciureanu/Lyra",
        permanent: false,
      },
      {
        source: "/hymn",
        destination: "https://github.com/VladCuciureanu/Hymn",
        permanent: false,
      },
      {
        source: "/toothpick",
        destination: "https://github.com/VladCuciureanu/Toothpick",
        permanent: false,
      },
    ]
  },
  experimental: {
    images: {
      allowFutureImage: true,
      remotePatterns: [
        {
          protocol: "https",
          hostname: "res.cloudinary.com",
          pathname: "/vladinski-md/**",
        },
        { hostname: "api.microlink.io" },
        { hostname: "pbs.twimg.com" },
      ],
    },
  },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test(".svg"),
    )
    fileLoaderRule.exclude = /\.svg$/
    config.module.rules.push({
      test: /\.svg$/,
      loader: require.resolve("@svgr/webpack"),
    })
    return config
  },
})
