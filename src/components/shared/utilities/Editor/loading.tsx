import { keyframes } from "@emotion/react"
import Grid from "@shared/containers/Grid"
import Text from "@shared/datadisplay/Text"
import React from "react"
import tw, { css, styled } from "twin.macro"

const LayoutContent = styled("div")(
    tw`border border-primary h-[300px] grid place-items-center`
)
const CodeEditorContent = styled(LayoutContent)([tw`p-2`])
const PreviewContent = styled(LayoutContent)(tw`@tab/loading:(border-l-0)`)

const opacity = keyframes`
0% {
   opacity: 0;
}
100% {
    opacity: 1;
}`

const StyledLoadingBar = styled("div")([
    tw`h-6 w-full border border-primary grid grid-cols-10 p-0.5 gap-0.5`,
])

const Bar = styled("span")(
    ({ delay, duration }: { duration: string; delay: string }) => [
        tw`bg-primary opacity-0`,
        css`
            animation: ${opacity} ${duration} ${delay} infinite
                steps(2, jump-none);
        `,
    ]
)

const Dot = styled("span")(
    ({ duration, delay }: { duration: string; delay: string }) => [
        css`
            animation: ${opacity} ${duration} ${delay} infinite
                steps(2, jump-none);
        `,
    ]
)

const LoadingBar = () => {
    return (
        <Grid tw="mx-auto w-full max-w-screen-sm gap-y-1">
            <StyledLoadingBar>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
                    <Bar
                        key={index}
                        delay={`${(index * 100) / 2}ms`}
                        duration={`1.5s`}
                    />
                ))}
            </StyledLoadingBar>

            <Text variant="title" tw="neon-text">
                Loading
                {[1, 2, 3].map((_, index) => (
                    <Dot
                        key={index}
                        delay={`${(index * 100) / 2}ms`}
                        duration={`500ms`}
                    >
                        .
                    </Dot>
                ))}
            </Text>
        </Grid>
    )
}

const LoadingEditor = () => {
    return (
        <div tw="min-h-[302px] max-h-[603px] @container/loading grid">
            <div tw="@tab/loading:(grid-cols-2) grid h-full">
                <CodeEditorContent>
                    <LoadingBar />
                </CodeEditorContent>
                <PreviewContent>
                    <LoadingBar />
                </PreviewContent>
            </div>
        </div>
    )
}

export default LoadingEditor
