import GlobalStyle from "@/styles/global"
import Footer from "@/ui/shared/footer"
import { seo } from "@/utils/seo"
import { DefaultSeo } from "next-seo"
import { ThemeProvider } from "next-themes"
import { AnimatePresence } from "framer-motion"
import type { AppProps } from "next/app"

function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <DefaultSeo {...seo} />
      <ThemeProvider defaultTheme="dark">
        <Footer />
        <AnimatePresence
          exitBeforeEnter
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </ThemeProvider>
    </>
  )
}

export default App
