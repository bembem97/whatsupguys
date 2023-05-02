import React from "react"
import { Global } from "@emotion/react"
import tw, { css, theme, GlobalStyles as BaseStyles } from "twin.macro"

const customStyles = css({
    ":root": {
        "--dark": "2 17 20",
        "--primary": "144 255 251",
        "--secondary": "64, 218, 230",
        "--highlight": "10 30 32",

        "--bevel-2": `
        0% 0%, 
        calc(100% - 1rem) 0%, 
        100% 1rem, 
        100% 100%, 
        1rem 100%,
        0% calc(100% - 1rem)`,
    },

    "html, body, #__next, #__content": {
        ...tw`min-h-screen`,
    },

    "::-webkit-scrollbar": {
        ...tw`w-2.5 h-2.5`,
    },

    "::-webkit-scrollbar-track": {
        ...tw`border border-primary p-0.5`,
    },

    "::-webkit-scrollbar-thumb": {
        background: `rgb(var(--primary) / 0.8)`,
    },

    "::-webkit-scrollbar-thumb:hover": {
        background: `rgb(var(--secondary))`,
    },

    body: {
        ...tw`antialiased text-primary bg-dark`,
        backgroundImage: `
        linear-gradient(to right, transparent 49%, rgb(var(--primary) / 0.01) 49% 51%, transparent 51%),
        linear-gradient(transparent 49%, rgb(var(--primary) / 0.01) 49% 51%, transparent 51%), 
        radial-gradient(rgb(var(--primary) / 0.03) 0%, transparent 6%)`,
        backgroundSize: `calc(100vw / 16) calc(100vw / 16)`,
        backgroundAttachment: "fixed",
    },
    "#__content": {
        display: "grid",
    },
})

const GlobalStyles = () => (
    <>
        <BaseStyles />
        <Global styles={customStyles} />
    </>
)

export default GlobalStyles
