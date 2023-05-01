import { FrontmatterProps } from "@dir/src/types/metadataTypes"
import OnTarget, { borderLock } from "@shared/decorations/OnTarget"
import Card from "@shared/surfaces/Card"
import CardAction from "@shared/surfaces/CardAction"
import CardContent from "@shared/surfaces/CardContent"
import CardMedia from "@shared/surfaces/CardMedia"
import React, { ComponentPropsWithoutRef, ElementType } from "react"
import tw, { styled } from "twin.macro"

interface CardListProps extends ComponentPropsWithoutRef<"div"> {
    data: FrontmatterProps[]
    as?: ElementType<any> | undefined
}

const StyledCardList = styled("div")(() => [tw`grid md:(grid-cols-2) gap-2`])

const CardList: React.FC<CardListProps> = ({ data, ...props }) => {
    return (
        <StyledCardList {...props}>
            {data.map((data, id) => (
                <OnTarget
                    key={id}
                    lock={false}
                    styles={borderLock}
                    render={(styles) => (
                        <Card css={styles} layout="portrait">
                            <CardAction href={`/blog/${data.pagename}`}>
                                <CardMedia src={data.image} alt={data.title} />
                                <CardContent
                                    tw="[&_p.excerpt]:(line-clamp-2) px-2"
                                    category={data.tags}
                                    datePosted={data.createdAt}
                                    title={data.title}
                                    excerpt={data.excerpt}
                                />
                            </CardAction>
                        </Card>
                    )}
                />
            ))}
        </StyledCardList>
    )
}

export default CardList
