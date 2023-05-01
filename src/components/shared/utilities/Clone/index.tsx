import { SerializedStyles } from "@emotion/react"
import { TwStyle } from "twin.macro"

type StyleProps =
    | TwStyle
    | SerializedStyles
    | (string | SerializedStyles | TwStyle)[]

interface Props {
    render: (arg: StyleProps | undefined) => JSX.Element
    styles?: StyleProps
}

const Clone = ({ render, styles }: Props) => {
    return render(styles)
}

export default Clone
