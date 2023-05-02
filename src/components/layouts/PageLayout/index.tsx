import React from "react"
import Meta from "@global/Meta"
import tw, { styled, theme } from "twin.macro"
import Navbar from "@global/Navbar"
import { LayoutProps } from "@dir/src/types/layout"
import Footer from "@global/Footer"

export const PageContainer = styled("div")(() => [
    tw`mx-auto w-full h-full grid gap-2 max-w-screen-xl px-1 lg:(px-0)`,
    {
        gridTemplate: `
            minmax(40px, auto)
            minmax(0, min-content)
            repeat(2, minmax(0, min-content))
            minmax(50px, 1fr) / repeat(1, 1fr)`,

        [`@media (min-width:${theme`screens.lg`})`]: {
            gridTemplate: `
            ". h h h h h h ." minmax(40px, min-content)
            ". s s s s s s ." minmax(0, min-content)
            ". m m m m a a ." minmax(0, min-content)
            ". f f f f f f ." minmax(50px, min-content)`,
            gridTemplateColumns:
                "1fr repeat(6, minmax(70px, min(100%, 9.375rem))) 1fr",

            "& > header": {
                gridArea: "h",
            },
            "& > main": {
                gridArea: "m",
            },
            "& > section": {
                gridArea: "s",
            },
            "& > aside": {
                gridArea: "a",
            },
            "& > footer": {
                gridArea: "f",
            },
        },
    },
])

const PageLayout: React.FC<LayoutProps> = ({ children, title }) => {
    return (
        <>
            <Meta title={title} />

            <PageContainer>
                <Navbar tw="pt-1" />

                {children}

                <Footer />
            </PageContainer>
        </>
    )
}

export default PageLayout
