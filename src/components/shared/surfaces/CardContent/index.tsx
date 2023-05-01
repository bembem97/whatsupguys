import Text from "@shared/datadisplay/Text"
import React, { useContext } from "react"
import StyledCardContent, { Time } from "./styled"
import useGetDate from "@dir/src/hooks/useGetDate"
// import { CardContext } from "../Card"

interface Props {
    category: string
    datePosted: string
    title: string
    excerpt: string
    noParag?: boolean
}

const CardContent = ({
    category,
    datePosted,
    title,
    excerpt,
    noParag = false,
    ...props
}: Props) => {
    // const layout = useContext(CardContext)
    const { year, month, day } = useGetDate(datePosted)

    return (
        <StyledCardContent {...props}>
            <Time dateTime={`${year}-${month}-${day}`}>
                <span className="category">{category}</span> — {month} {day},{" "}
                {year}
            </Time>

            <Text
                as="h2"
                variant="title"
                className="card-title"
                tw="text-2xl truncate"
            >
                {title}
            </Text>

            {noParag === false && (
                <Text className="excerpt" variant="sub" as="p">
                    {excerpt}
                </Text>
            )}
        </StyledCardContent>
    )
}

export default CardContent
