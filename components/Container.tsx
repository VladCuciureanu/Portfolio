import Head from "next/head";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import { useRouter } from "next/router";

export default function Container(props: { children: any }) {
  const router = useRouter();
  const { children, ...customMeta } = props;
  const meta: any = {
    title: "Vlad Cuciureanu – Developer, husband, unicorn.",
    description: `Full-stack Developer, Graphic Designer, and JavaScript Enthusiast.`,
    image: "https://vladinski.md/static/images/banner.png",
    type: "website",
    ...customMeta,
  };

  return (
    <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto px-8">
      <Head>
        <title>{meta.title}</title>
        <link rel="canonical" href={`https://vladinski.md${router.asPath}`} />
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://vladinski.md${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Vlad Cuciureanu" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@VladinskiDev" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <NavigationBar />
      <main className="w-full mb-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}
