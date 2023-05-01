import Grid from "@shared/containers/Grid"
import Text from "@shared/datadisplay/Text"
import React from "react"
import tw, { styled } from "twin.macro"

const StyledFooter = styled("footer")(() => [
    tw`p-7 mb-0.5 border border-primary/25`,
])

const Footer = () => {
    return (
        <StyledFooter>
            <Grid tw="gap-y-4 place-items-center">
                <Text variant="sub" as="p" tw="flex items-center gap-x-1.5">
                    &copy; {new Date().getFullYear()} Copyright:{" "}
                    <Text variant="paragraph">{"WhatsUpGuys"}</Text>
                </Text>
            </Grid>
        </StyledFooter>
    )
}

export default Footer
