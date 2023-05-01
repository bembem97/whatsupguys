import React from "react"
import Link from "./Link"
import tw, { styled } from "twin.macro"
import OnTarget, { borderLock } from "@shared/decorations/OnTarget"
import Text from "@shared/datadisplay/Text"

interface NavigateToPostTypes {
    back: { pagename: string }
    next: { pagename: string }
}

const PostButton = styled(Link)(tw``)

const NavigateToPost = ({ back, next }: NavigateToPostTypes) => {
    return (
        <div tw="bg-dark flex justify-between">
            {back && (
                <OnTarget
                    styles={[borderLock, tw`px-4`]}
                    lock={false}
                    render={(styles) => (
                        <PostButton
                            css={styles}
                            href={`/blog/${back.pagename}`}
                        >
                            <Text variant="title">&laquo; Back</Text>
                        </PostButton>
                    )}
                />
            )}

            {next && (
                <OnTarget
                    styles={[borderLock, tw`px-4`]}
                    lock={false}
                    render={(styles) => (
                        <PostButton
                            css={styles}
                            href={`/blog/${next.pagename}`}
                            tw="ml-auto"
                        >
                            <Text variant="title">Next &raquo;</Text>
                        </PostButton>
                    )}
                />
            )}
        </div>
    )
}

export default NavigateToPost
