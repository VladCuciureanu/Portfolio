import { Metadata } from "next";

const isProd = process.env.NODE_ENV === "production";
const protocol = isProd ? "https:" : "http:";

export const DefaultMetadataValues = {
  title: "Vlad Cuciureanu",
  description: "Full-Stack Developer at Faith Software",
  meta: "vladcuciureanu.com",
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
      images: [
        {
          url: `/api/og?` + new URLSearchParams(props),
          width: 1600,
          height: 836,
          alt: title,
        },
      ],
    },
  };
}

export const DefaultMetadata = generateMetadata({});
