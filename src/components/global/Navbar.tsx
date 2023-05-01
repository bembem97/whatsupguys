import React, { HTMLAttributes } from "react"
import Flex from "@shared/containers/Flex"
import NavLink from "@shared/navigations/NavLink"
import OnTarget from "@shared/decorations/OnTarget"
import tw, { styled, theme } from "twin.macro"

type Props = HTMLAttributes<HTMLElement>

const Header = styled("header")(() => [tw`sticky top-0 z-navbar`])

const Navbar = ({ ...props }: Props) => {
    return (
        <Header className="header" {...props}>
            <OnTarget
                lock={true}
                styles={tw`bg-dark/80 h-full`}
                render={(styles) => (
                    <Flex
                        as="nav"
                        dir="row"
                        tw="h-full justify-center items-stretch gap-x-1"
                        css={styles}
                    >
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/blog">Blog</NavLink>
                        <NavLink href="/test">Test</NavLink>
                    </Flex>
                )}
            />
        </Header>
    )
}

export default Navbar
