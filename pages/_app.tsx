import GlobalStyles from "@dir/styles/GlobalStyles"
import type { AppProps } from "next/app"
import { Inter } from "next/font/google"
import NextNProgress from "nextjs-progressbar"
import tw from "twin.macro"

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
})

const App = ({ Component, pageProps }: AppProps) => (
    <>
        <NextNProgress color="rgb(var(--primary))" />
        <GlobalStyles />
        <div id="__content" className={`${inter.variable}`} tw="font-mono">
            <Component {...pageProps} />
        </div>
    </>
)

export default App
