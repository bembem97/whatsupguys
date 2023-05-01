import tw, { styled } from "twin.macro"

interface Props {
    fluid?: boolean
}

const Container = styled("div")(({ fluid = false }: Props) => [
    tw`w-full container`,
    typeof fluid === "boolean" && fluid === true && tw`max-w-full!`,
])

export default Container
