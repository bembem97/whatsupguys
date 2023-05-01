import React, { ComponentPropsWithoutRef, useContext } from "react"
import StyledCardAction from "./styled"
import { CardContext } from "../Card"

interface Props extends ComponentPropsWithoutRef<"a"> {}

const CardAction = ({ ...props }: Props) => {
    const layout = useContext(CardContext)

    return (
        <StyledCardAction
            href={props.href || "/404"}
            layout={layout}
            {...props}
        >
            {props.children}
        </StyledCardAction>
    )
}

export default CardAction
