import { FrontmatterProps } from "@dir/src/types/metadataTypes"
import Card from "@shared/surfaces/Card"
import CardAction from "@shared/surfaces/CardAction"
import CardMedia from "@shared/surfaces/CardMedia"
import CardContent from "@shared/surfaces/CardContent"
import React from "react"
import tw from "twin.macro"
import Grid from "@shared/containers/Grid"
import OnTarget, { borderLock } from "@shared/decorations/OnTarget"
import Text from "@shared/datadisplay/Text"

interface Props {
    data: FrontmatterProps[]
}

const TopArticles = ({ data }: Props) => {
    return (
        <div tw="@container/card-list">
            <Text variant="paragraph" tw="neon-text">
                For Beginners
            </Text>

            <Grid tw="grid-cols-1 gap-2 @tab/card-list:(grid-rows-[repeat(2, minmax(0, min-content))] grid-cols-2)">
                {data?.map((post, id) => (
                    <OnTarget
                        key={id}
                        lock={false}
                        styles={borderLock}
                        render={(styles) => (
                            <Card
                                layout={id === 0 ? "portrait" : "landscape"}
                                css={[
                                    styles,
                                    tw`first-of-type:(
                                        @tab/card-list:(
                                            row-span-2
                                            [&_a.card-action]:grid-cols-[min(100%,_200px)_minmax(0,_1fr)]
                                            [&_p.excerpt]:(line-clamp-7 text-sm)
                                        )
                                    )`,
                                ]}
                            >
                                <CardAction
                                    className="card-action"
                                    href={`/blog/${post.pagename}`}
                                    css={[
                                        tw`px-1.5 @sm/card-list:(pl-0 pr-1)`,
                                        id === 0 && tw`pl-1`,
                                    ]}
                                >
                                    <CardMedia
                                        alt={post.title}
                                        src={post.image}
                                    />
                                    <CardContent
                                        datePosted={post.createdAt}
                                        title={post.title}
                                        category={post.tags}
                                        excerpt={post.excerpt}
                                    />
                                </CardAction>
                            </Card>
                        )}
                    />
                ))}
            </Grid>
        </div>
    )
}

export default TopArticles
