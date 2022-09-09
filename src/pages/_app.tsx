import GlobalStyle from "@/styles/global"
import { seo } from "@/utils/seo"
import { DefaultSeo } from "next-seo"
import { ThemeProvider } from "next-themes"
import { AnimatePresence } from "framer-motion"
import type { AppProps } from "next/app"
import Header from "@/ui/shared/layout/header"
import Noise from "@/ui/shared/noise"
import styled from "styled-components"

function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <DefaultSeo {...seo} />
      <ThemeProvider defaultTheme="dark">
        <NoiseBackground opacity={0.1} />
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

const NoiseBackground = styled(Noise)`
  position: fixed;
  width: 100vw;
  height: 100vh;
`

export default App
