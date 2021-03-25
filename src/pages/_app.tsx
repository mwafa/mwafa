import { CSSReset, ChakraProvider } from "@chakra-ui/react"

import { AppProps } from "next/app"
import { Footer } from "../components/footer"
import chakra from "../themes/chakra"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={chakra}>
      <CSSReset />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  )
}

export default MyApp
