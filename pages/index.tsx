import PageLayout from "@layouts/PageLayout"
import { getMetaDatas } from "@dir/src/helpers/metadata"
import { FrontmatterProps } from "@dir/src/types/metadataTypes"
import Grid from "@shared/containers/Grid"
import TopArticles from "@shared/containers/Cards/TopArticles"

import FeaturedArticles from "@shared/containers/Cards/FeaturedArticles"
import SideArticles from "@shared/containers/Cards/SideArticles"
import tw from "twin.macro"

interface HomeProps {
    side: FrontmatterProps[]
    homePosts: FrontmatterProps[]
    topArticles: FrontmatterProps[]
}

export default function Home({ side, homePosts, topArticles }: HomeProps) {
    // const ref = useRef(null)
    // const entry = useIntersectionObserver(ref, { threshold: 0.6 })

    return (
        <PageLayout title="Home">
            <section>
                <TopArticles data={topArticles} />
            </section>

            <Grid as="main" tw="gap-y-4">
                <FeaturedArticles data={homePosts} />
            </Grid>

            <aside>
                <SideArticles data={side} />
            </aside>
        </PageLayout>
    )
}

export async function getStaticProps() {
    const homePosts = await getMetaDatas({ articleType: "featured" })
    const side = await getMetaDatas({ category: "howto" })
    const topArticles = await getMetaDatas({ articleType: "top" })

    return { props: { side, homePosts, topArticles } }
}
