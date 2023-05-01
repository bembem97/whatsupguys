import tw, { styled } from "twin.macro"

interface Props {
    dir?: "col" | "row"
    center?: boolean
}

const Flex = styled("div")(({ dir = "col", center }: Props) => [
    tw`flex`,
    dir === "col" && tw`flex-col`,
    dir === "row" && tw`flex-row`,
    center && tw`justify-center items-center`,
])

export default Flex
