import tw, { styled } from "twin.macro"

interface Props {
    center?: boolean
}

const Grid = styled("div")(({ center }: Props) => [
    tw`grid`,
    center && tw`place-items-center`,
])

export default Grid
