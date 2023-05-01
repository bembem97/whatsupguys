import NextLink from "next/link"
import { useRouter } from "next/router"
import React, { ComponentPropsWithoutRef } from "react"
import tw, { styled } from "twin.macro"

interface Props extends ComponentPropsWithoutRef<"a"> {
    href: string
}

const StyledNavLink = styled(NextLink)(({}) => [
    tw`inline-flex items-center justify-center p-4 tab:(py-1) uppercase text-primary font-semibold border-2 border-transparent hover:(bg-highlight neon-text border-b-primary)`,
])

const NavLink = ({ href, children, ...props }: Props) => {
    const router = useRouter()
    const { query } = router

    return (
        <StyledNavLink {...props} href={href}>
            {children}
        </StyledNavLink>
    )
}

export default NavLink
