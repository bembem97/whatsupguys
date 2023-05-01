import Container from "@shared/containers/Container"
import { ComponentPropsWithoutRef } from "react"
// import tw, { styled } from "twin.macro"

const MainComponent = Container.withComponent("main")

const Main: React.FC<ComponentPropsWithoutRef<"main">> = ({
    children,
    ...props
}) => {
    return (
        <MainComponent {...props}>
            <Container>{children}</Container>
        </MainComponent>
    )
}

export default Main
