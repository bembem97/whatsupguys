import { SerializedStyles } from "@emotion/react"
import tw, { TwStyle } from "twin.macro"

type StyleProps =
    | TwStyle
    | SerializedStyles
    | (string | SerializedStyles | TwStyle)[]

interface Props {
    render: (arg: StyleProps | undefined) => JSX.Element
    styles?: StyleProps
    lock: boolean
}

export const borderLock = tw`border border-primary/25 hover:border-x-transparent`

const DEFAULT = (lock: boolean) => [
    tw`border border-transparent p-[1px]`,
    lock === true && tw`on-target`,
    lock === false && tw`hover:on-target`,
]

const OnTarget = ({ render, styles, lock }: Props) => {
    const STYLES = [...DEFAULT(lock), styles] as StyleProps

    return render(STYLES)
}

export default OnTarget
