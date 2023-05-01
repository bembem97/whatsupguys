import tw, { styled } from "twin.macro"
import NextLink from "next/link"
import Text from "@shared/datadisplay/Text"

const StyledLink = styled(NextLink)(() => tw`inline-block hover:text-secondary`)

const Link = Text.withComponent(StyledLink)

export default Link
