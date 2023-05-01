import React from "react"
import StyledCardMedia from "./styled"
import Image from "@shared/datadisplay/Image"
import { theme } from "twin.macro"

interface Props {
    src: string
    alt: string
}

const CardMedia = ({ src, alt = "media" }: Props) => {
    return (
        <StyledCardMedia>
            <figure>
                <Image
                    fill
                    alt={alt}
                    src={src}
                    sizes={`
                        (max-width ${theme`screens.mobile`}): 100vw,
                        (max-width ${theme`screens.tab`}): 75vw,
                        50vw
                    `}
                />
            </figure>
        </StyledCardMedia>
    )
}

export default CardMedia
