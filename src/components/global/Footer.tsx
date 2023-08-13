import Container from "@shared/containers/Container"
import Grid from "@shared/containers/Grid"
import Text from "@shared/datadisplay/Text"
import React from "react"
import tw, { styled } from "twin.macro"

const StyledFooter = styled("div")(() => [tw`p-7 mb-0.5`])

const Footer = () => {
    return (
        <footer>
            <StyledFooter>
                <Grid tw="gap-y-4 place-items-center">
                    <Text variant="sub" as="p" tw="flex items-center gap-x-1.5">
                        &copy; {new Date().getFullYear()} Copyright by
                        <Text variant="paragraph">{"WhatsUpGuys"}</Text>
                    </Text>
                </Grid>
            </StyledFooter>
        </footer>
    )
}

export default Footer
