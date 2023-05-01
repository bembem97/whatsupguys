import Link from "@shared/navigations/Link"
import tw, { styled } from "twin.macro"

interface Props {
    layout?: "portrait" | "landscape"
}

const CardAction = styled(Link)(({ layout = "portrait" }: Props) => [
    tw`h-full w-full py-2 grid gap-x-2 gap-y-4 transition-colors duration-75 hover:(bg-highlight)`,

    layout === "landscape" && tw`card-landscape`,
    layout === "portrait" && tw`card-portrait @sm/card:(card-landscape)`,
])

export default CardAction
