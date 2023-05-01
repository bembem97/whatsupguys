import React from "react"
import Meta from "@global/Meta"
import tw, { styled, theme } from "twin.macro"
import Navbar from "@global/Navbar"
import { ArticleProps } from "@dir/src/types/layout"
import Main from "@shared/containers/LayoutContainer/HomeContainer"
import SubscribeNow from "@global/SubscribeNow"
import TabContext from "@shared/navigations/Tabs/TabContext"
import Dropdown from "@shared/surfaces/Dropdown"
import DropdownButton from "@shared/surfaces/Dropdown/DropdownButton"
import DropdownMenu from "@shared/surfaces/Dropdown/DropdownMenu"
import Grid from "@shared/containers/Grid"
// import { PageContainer } from "@layouts/PageLayout"

// const PageContainer = styled("div")(() => [
//     tw`grid grid-cols-1 w-full grid-rows-[minmax(40px,auto)_1fr_minmax(40px,auto)] max-w-screen-xl mx-auto mt-1`,
// ])

export const PageContainer = styled("div")(() => [
    tw`px-1.5 mx-auto w-full h-full grid gap-1.5 max-w-screen-xl`,
    {
        // gridTemplate: `
        //     minmax(10px, auto)
        //     minmax(0, 1fr)
        //     minmax(50px, auto) / repeat(1, 1fr)`,
        gridTemplateRows: "minmax(0, auto) 1fr minmax(0, auto)",

        // [`@media (min-width:${theme`screens.lg`})`]: {
        //     gridTemplate: `
        //     ". h h h h h h ." minmax(10px, auto)
        //     ". m m m m a a ." minmax(0, 1fr)
        //     ". f f f f f f ." minmax(50px, auto)`,
        //     // gridTemplateRows:
        //     //     "minmax(40px, auto) minmax(0, 1fr) minmax(50px, auto)",
        //     gridTemplateColumns:
        //         "1fr repeat(6, minmax(70px, min(100%, 9.375rem))) 1fr",
        //     "& > .header": {
        //         gridArea: "h",
        //     },
        //     "& > main": {
        //         gridArea: "m",
        //     },
        //     "& > section": {
        //         gridArea: "s",
        //     },
        //     "& > aside": {
        //         gridArea: "a",
        //     },
        //     "& > footer": {
        //         gridArea: "f",
        //     },
        // },
    },
])

const BlogLayout: React.FC<ArticleProps> = ({ children, title, data }) => {
    return (
        <>
            <Meta title={title} />

            <PageContainer>
                <TabContext data={data}>
                    <Grid
                        className="header"
                        tw="grid-cols-[1fr_minmax(60px,auto)] sticky top-0 z-navbar gap-1 pt-1"
                    >
                        <Navbar
                        // css={[tw`h-full`]}
                        />

                        <Dropdown>
                            <DropdownButton />
                            <section tw="overflow-hidden col-span-full bg-dark/80">
                                <DropdownMenu />
                            </section>
                        </Dropdown>
                    </Grid>

                    {children}
                </TabContext>

                <footer tw="py-10 bg-highlight"></footer>
            </PageContainer>
        </>
    )
}

export default BlogLayout
