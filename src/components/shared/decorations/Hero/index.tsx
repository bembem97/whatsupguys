import tw, { css, styled, theme } from "twin.macro"
import { Global, SerializedStyles } from "@emotion/react"
import { useEffect, useState } from "react"

const isChromium = css({
    html: {
        ...tw`h-screen overflow-hidden`,
    },
    body: {
        ...tw`overflow-x-hidden overflow-y-auto h-screen perspective-1k`,
    },
    "#__next, #__next > div, .affected-by-3d": {
        ...tw`transform-3d`,
    },
})

// const isFirefox = css({
//     "html, body, #__next": {
//         ...tw`min-h-screen`,
//     },
//     "#__next > div, .affected-by-3d": {
//         ...tw`transform-flat `,
//     },
// })

const HeroComponent = ({ ...props }) => {
    // const [userAgent, setUserAgent] = useState<string>("")
    // const browser = userAgent === "Firefox" ? isFirefox : isChromium

    // useEffect(() => {
    //     const ua = navigator.userAgent
    //     if (ua.indexOf("Firefox") > -1) setUserAgent("Firefox")
    // }, [setUserAgent])

    // let ua: string = ""
    // let browser: SerializedStyles = css``

    // if (
    //     typeof window !== "undefined" &&
    //     (navigator.userAgent.indexOf("Chrome") > -1 ||
    //         navigator.userAgent.indexOf("Edg") > -1 ||
    //         navigator.userAgent.indexOf("Safari") > -1)
    // ) {
    //     // browser =
    //     //     navigator.userAgent.indexOf("Firefox") > -1 ? isFirefox : isChromium
    //     // browser = ua.indexOf("Firefox") > -1 ? isFirefox : isChromium
    //     browser = isChromium
    // }

    // if (
    //     typeof window !== "undefined" &&
    //     navigator.userAgent.indexOf("Firefox") > -1
    // ) {
    //     // browser =
    //     //     navigator.userAgent.indexOf("Firefox") > -1 ? isFirefox : isChromium
    //     // browser = ua.indexOf("Firefox") > -1 ? isFirefox : isChromium
    //     browser = isFirefox
    // }

    return (
        <>
            <Global styles={isChromium} />
            <section {...props}>{props.children}</section>
        </>
    )
}

const Hero = styled(HeroComponent)(() => [
    tw`grid place-items-center relative -z-10 transform-3d [&>*]:(col-span-full row-span-full)`,
])

export default Hero
