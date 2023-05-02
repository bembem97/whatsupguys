import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
import {
    getArticleContent,
    getFrontmatter,
    getMetaDatas,
} from "@dir/src/helpers/metadata"
import PageLayout from "@layouts/PageLayout"
import { FrontmatterProps } from "@dir/src/types/metadataTypes"
import tw from "twin.macro"
import Text from "@shared/datadisplay/Text"
import Divider from "@shared/datadisplay/Divider"
import SyntaxStyles from "@dir/styles/SyntaxStyles"
import SideArticles from "@shared/containers/Cards/SideArticles"
import Grid from "@shared/containers/Grid"
import Container from "@shared/containers/Container"
import filter, { KeyProps } from "@dir/src/components/views"
import previews from "@dir/src/helpers/previews"

import NavigateToPost from "@shared/navigations/NavigateToPost"

const components = {
    p: ({ ...props }) => <Text variant="paragraph" as="p" {...props} />,
    h1: ({ ...props }) => (
        <Text variant="header" as="h2" tw="mb-0" {...props} />
    ),
    h2: ({ ...props }) => <Text variant="title" as="h3" {...props} />,
    code: ({ ...props }) => (
        <Text variant="code" className="code" tw="px-1" as="code" {...props} />
    ),
    hr: ({ ...props }) => <Divider {...props} />,
    ul: ({ ...props }) => <ul {...props} tw="list-disc p-[revert]" />,
}

type ArticleProps = {
    source: MDXRemoteSerializeResult & { frontmatter: FrontmatterProps }
    side: FrontmatterProps[]
    preview: KeyProps
    moveTo: {
        back: FrontmatterProps
        next: FrontmatterProps
    }
}

const maskingText = [
    tw`bg-gradient-to-r from-indigo-400 via-amber-600 to-rose-500 text-transparent bg-clip-text text-4xl box-decoration-clone`,
]

const Main = Container.withComponent("main")
const Aside = Container.withComponent("aside")

export default function Article({
    source,
    side,
    preview,
    moveTo,
}: ArticleProps) {
    const Arr = previews(preview)
    const { back, next } = moveTo

    return (
        <>
            <SyntaxStyles />
            <PageLayout tw="px-2" title={source.frontmatter.title}>
                <Main>
                    <Grid tw="gap-y-5 grid-cols-[minmax(0,_1fr)]">
                        <NavigateToPost next={next} back={back} />

                        <Text variant="header" as="h1">
                            <span css={[...maskingText]}>
                                {source.frontmatter.title}
                            </span>
                        </Text>

                        <Text tw="break-words">
                            <span tw="font-semibold">Original Source: </span>
                            {source.frontmatter.source || "None"}
                        </Text>

                        <Divider />

                        <MDXRemote
                            {...source}
                            components={{
                                ...components,
                                ...Arr,
                            }}
                        />
                        <NavigateToPost next={next} back={back} />
                    </Grid>
                </Main>

                <Aside>
                    <div tw="lg:(sticky top-12)">
                        <SideArticles data={side} />
                    </div>
                </Aside>
            </PageLayout>
        </>
    )
}

interface ParamProps {
    params: { article: string }
    testProp: string
}

export async function getStaticProps({ params }: ParamProps) {
    // console.log(testProp)
    // * CURRENT ARTICLE METADATAS
    const { content: data } = await getArticleContent(params.article)

    let frontmatter

    if (typeof data !== "boolean") {
        frontmatter = data.frontmatter
    }

    const category = frontmatter?.tags || ""
    const reference = frontmatter?.reference || ""

    // * NAVIGATE TO NEXT/PREVIOUS POST
    const metadata = await getMetaDatas()
    const currentData = metadata.findIndex(
        (item) => item.pagename === params.article
    )
    let next, previous, moveTo

    if (typeof currentData !== "undefined") {
        previous = metadata[currentData - 1]
        next = metadata[currentData + 1]

        if (typeof next === "undefined") {
            next = null
        }
        if (typeof previous === "undefined") {
            previous = null
        }

        moveTo = { back: previous, next }
    }

    // * EDITORS
    let preview
    preview = await filter(category, reference)

    if (typeof preview === "undefined") {
        return (preview = {})
    }

    // * SIDE POST
    const side = await getMetaDatas({ category: "howto" })

    return { props: { source: data, side, preview, moveTo } }
}

export async function getStaticPaths() {
    const articles = await getFrontmatter()

    const paths = articles.map((article) => ({
        params: { article: article?.pagename },
    }))

    return {
        paths,
        fallback: false,
    }
}
