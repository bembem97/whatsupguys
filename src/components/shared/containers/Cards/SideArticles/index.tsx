import { FrontmatterProps } from "@dir/src/types/metadataTypes"
import Grid from "@shared/containers/Grid"
import OnTarget, { borderLock } from "@shared/decorations/OnTarget"
import Card from "@shared/surfaces/Card"
import CardContent from "@shared/surfaces/CardContent"
import CardMedia from "@shared/surfaces/CardMedia"
import CardAction from "@shared/surfaces/CardAction"
import React from "react"
import tw from "twin.macro"
import Text from "@shared/datadisplay/Text"

interface Props {
    data: FrontmatterProps[]
}

const SideArticles = ({ data }: Props) => {
    return (
        <Grid tw="gap-2">
            <Text variant="paragraph" tw="neon-text">
                How To
            </Text>

            <Grid tw="gap-2 md:(grid-cols-2) lg:(grid-cols-1)">
                {data?.map((post, id) => (
                    <OnTarget
                        key={id}
                        lock={false}
                        styles={borderLock}
                        render={(styles) => (
                            <Card small css={styles} layout="landscape">
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
                                        noParag
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

export default SideArticles
