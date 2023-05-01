import tw, { css, styled } from "twin.macro"

const CardMedia = styled("section")(() => [
    tw`px-1 flex`,
    css`
        figure {
            ${tw`grow relative`}
        }
    `,
])

export { CardMedia as default }
