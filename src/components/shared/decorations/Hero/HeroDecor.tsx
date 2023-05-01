import tw, { styled } from "twin.macro"

interface Props {
    translateZ?: string | null
}

const HeroDecor = styled("div")(({ translateZ = null }: Props) => [
    tw`translateZ-500`,
    typeof translateZ === "string" && `translate: 0 0 ${translateZ};`,
])

export default HeroDecor
