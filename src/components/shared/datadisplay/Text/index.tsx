import tw, { css, styled } from "twin.macro"

interface Props {
    variant?: "title" | "paragraph" | "header" | "code" | "sub"
}

const Text = styled("span")(({ variant }: Props) => [
    variant === "title" && tw`text-lg font-semibold block md:(font-medium)`,
    variant === "paragraph" && tw`text-sm`,
    variant === "header" && tw`text-2xl font-semibold mb-4 block md:(text-3xl)`,
    variant === "code" && tw`[&.code]:(font-mono bg-gray-800)`,
    variant === "sub" && tw`text-xs`,
])

export default Text
