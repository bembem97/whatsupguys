import { getMetaDatas } from "@dir/src/helpers/metadata"
import { FrontmatterProps } from "@dir/src/types/metadataTypes"
import BlogLayout from "@layouts/BlogLayout"
import TabPanel from "@shared/navigations/Tabs/TabPanel"
import React from "react"
import tw from "twin.macro"

interface Props {
    data: FrontmatterProps[]
}

export default function Blog({ data }: Props) {
    return (
        <BlogLayout data={data} title="Blog">
            <main>
                <TabPanel />
            </main>
        </BlogLayout>
    )
}

export async function getStaticProps() {
    // const data = await getFrontmatter()
    // const side = await getSpecific("featured")
    const data = await getMetaDatas()

    return { props: { data } }
}
