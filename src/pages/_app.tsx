import type { AppProps } from "next/app"
import { DefaultSeo } from "next-seo"
import { seo } from "@/utils/seo"
import GlobalStyle from "@/styles/global"
import { ThemeProvider } from "next-themes"
import ThemeToggle from "@/ui/shared/theme-toggle"
import Footer from "@/ui/shared/footer"
import { AnimatePresence } from "framer-motion"
import "@/styles/fonts.css"

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
        {/* <ThemeToggle /> */}
      </ThemeProvider>
    </>
  )
}

export default App
