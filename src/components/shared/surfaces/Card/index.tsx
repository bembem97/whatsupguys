import React, { ComponentPropsWithoutRef } from "react"
import StyledCard from "./styled"

export const CardContext = React.createContext<"portrait" | "landscape">(
    "portrait"
)

interface Props extends ComponentPropsWithoutRef<"article"> {
    layout?: "portrait" | "landscape"
    small?: boolean
}

const Card = ({ layout = "portrait", children, ...props }: Props) => {
    return (
        <CardContext.Provider value={layout}>
            <StyledCard {...props}>{children}</StyledCard>
        </CardContext.Provider>
    )
}

export default Card
