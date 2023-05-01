import Link from "@shared/navigations/Link"
import tw, { styled } from "twin.macro"

const StyledChip = styled("a")(() => [
    tw`inline-block uppercase hover:(bg-highlight)`,
])

const Chip = Link.withComponent(StyledChip)

export default Chip
