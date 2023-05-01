import { Html, Head, Main, NextScript } from "next/document"
import { getSandpackCssText } from "@codesandbox/sandpack-react"

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <style
                    dangerouslySetInnerHTML={{ __html: getSandpackCssText() }}
                    id="sandpack"
                    key="sandpack-css"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
