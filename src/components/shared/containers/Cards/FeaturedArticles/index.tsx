import { FrontmatterProps } from "@dir/src/types/metadataTypes"
import Card from "@shared/surfaces/Card"
import CardAction from "@shared/surfaces/CardAction"
import CardMedia from "@shared/surfaces/CardMedia"
import CardContent from "@shared/surfaces/CardContent"
import React from "react"
import tw from "twin.macro"
import Grid from "@shared/containers/Grid"
import OnTarget, { borderLock } from "@shared/decorations/OnTarget"
import Link from "@shared/navigations/Link"
import Container from "@shared/containers/Container"

interface Props {
    data: FrontmatterProps[]
}

const FeaturedArticles = ({ data }: Props) => {
    return (
        <Grid tw="gap-y-2">
            <Container fluid tw="border border-primary/25 py-2">
                <OnTarget
                    lock={false}
                    render={(styles) => (
                        <Link
                            href="/blog"
                            variant="title"
                            css={styles}
                            tw="w-fit uppercase"
                        >
                            View More
                        </Link>
                    )}
                />
            </Container>

            <Grid tw="gap-2 md:(grid-cols-2 grid-rows-2)">
                {data?.map((post, id) => (
                    <OnTarget
                        key={id}
                        lock={false}
                        styles={borderLock}
                        render={(styles) => (
                            <Card
                                css={[
                                    styles,
                                    tw`md:(first-of-type:(row-span-2 col-start-2 col-end-3))`,
                                    tw`md:([&:nth-of-type(2)]:(row-start-1 row-end-2)) md:([&:first-of-type>a]:(card-portrait))`,
                                ]}
                                layout={id !== 0 ? "landscape" : "portrait"}
                            >
                                <CardAction href={`/blog/${post.pagename}`}>
                                    <CardMedia
                                        alt={post.title}
                                        src={post.image}
                                    />
                                    <CardContent
                                        title={post.title}
                                        category={post.tags}
                                        excerpt={post.excerpt}
                                        datePosted={post.createdAt}
                                        tw="p-1.5"
                                    />
                                </CardAction>
                            </Card>
                        )}
                    />
                ))}
            </Grid>
        </Grid>
    )
}

export default FeaturedArticles
