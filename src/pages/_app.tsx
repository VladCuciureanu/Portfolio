import GlobalStyle from "@/styles/global"
import { seo } from "@/utils/seo"
import { DefaultSeo } from "next-seo"
import { ThemeProvider } from "next-themes"
import { AnimatePresence } from "framer-motion"
import type { AppProps } from "next/app"
import Header from "@/ui/shared/layout/header"
// import NoiseFilter from "@/ui/shared/noise"

function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      {/* <NoiseFilter /> */}
      <GlobalStyle />
      <DefaultSeo {...seo} />
      <ThemeProvider defaultTheme="dark">
        <Header />
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
