import { Metadata } from "next";

const isProd = process.env.NODE_ENV === "production";
const protocol = isProd ? "https:" : "http:";

export const DefaultMetadataValues = {
  title: isProd ? "Vlad Cuciureanu" : "[Dev] Vlad Cuciureanu",
  description:
    "A software engineer from Romania, with an interest in web development and open source software; currently working as a contractor.",
  meta: "vlad.cuciureanu.me",
  domain: process.env.HOST,
};

export function generateMetadata(props: {
  title?: string;
  meta?: string;
  description?: string;
  path?: string;
}): Metadata {
  const title = props.title ?? DefaultMetadataValues.title;
  const meta = props.meta ?? DefaultMetadataValues.meta;
  const description = props.description ?? DefaultMetadataValues.description;
  const domain = DefaultMetadataValues.domain;

  return {
    title: props.title ? `${title} | ${meta}` : title,
    description,
    metadataBase: new URL(`${protocol}//${domain}`),
    openGraph: {
      title,
      type: "website",
      url: props.path
        ? `${protocol}//${domain}${props.path}`
        : `${protocol}//${domain}`,
      siteName: title,
      description,
      images: [
        {
          url: `images/og.png`,
          width: 2400,
          height: 1260,
          alt: title,
        },
      ],
    },
    twitter: {
      title,
      description,
      card: "summary_large_image",
      images: [
        {
          url: `images/og.png`,
          width: 2400,
          height: 1260,
          alt: title,
        },
      ],
    },
  };
}

export const DefaultMetadata = generateMetadata({});
