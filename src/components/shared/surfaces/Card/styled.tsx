import tw, { css, styled } from "twin.macro"
import CardAction from "../CardAction/styled"
import CardContent from "../CardContent/styled"

interface Props {
    small?: boolean
}

const Card = styled("article")(({ small }: Props) => [
    tw`@container/card border border-primary w-full`,
    small &&
        css`
            ${CardAction} {
                ${tw`grid-cols-[min(100%,_60px)_minmax(0,_1fr)]`}
            }

            ${CardContent} h2.card-title {
                ${tw`text-base font-medium font-sans`}
            }
        `,
])

export default Card
