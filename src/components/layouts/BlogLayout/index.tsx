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
import Footer from "@global/Footer"

export const PageContainer = styled("div")(() => [
    tw`px-1.5 mx-auto w-full h-full grid gap-1.5 max-w-screen-xl`,
    {
        gridTemplateRows: "minmax(0, auto) 1fr minmax(0, auto)",
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
                        <Navbar />

                        <Dropdown>
                            <DropdownButton />
                            <section tw="overflow-hidden col-span-full bg-dark/80">
                                <DropdownMenu />
                            </section>
                        </Dropdown>
                    </Grid>

                    {children}
                </TabContext>

                <Footer />
            </PageContainer>
        </>
    )
}

export default BlogLayout
