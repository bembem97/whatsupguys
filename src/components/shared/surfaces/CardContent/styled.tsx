import Text from "@shared/datadisplay/Text"
import tw, { css, styled, theme } from "twin.macro"

const Time = Text.withComponent("time")

interface Props {
    small?: boolean
}

const CardContent = styled("section")(({ small }: Props) => [
    css`
        ${Text}.card-title {
            ${tw`truncate`}
        }

        ${Text}.excerpt {
            ${tw`line-clamp-4 @sm/card:(line-clamp-2 text-left) @mobile/card:(line-clamp-3)`}
        }

        ${Time} {
            ${tw`text-xs`}
        }

        .category {
            ${tw`uppercase font-semibold`}
        }
    `,
])

export { CardContent as default, Time }
