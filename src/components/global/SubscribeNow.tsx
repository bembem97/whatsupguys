import Section from "@shared/containers/Container/Section"
import Text from "@shared/datadisplay/Text"
import OnTarget from "@shared/decorations/OnTarget"
import React from "react"
import tw, { theme } from "twin.macro"

const SubscribeNow = () => {
    return (
        <section tw="chamfered-1 ui px-2">
            <Text variant="header">Stay Updated</Text>
            <form
                onSubmit={(e) => e.preventDefault()}
                tw="flex gap-x-1 flex-col gap-y-2 max-w-screen-md"
            >
                <input
                    placeholder="Enter your email here*"
                    type="text"
                    tw="rounded border outline-0 px-2 py-3 grow"
                />
                <OnTarget
                    lock={false}
                    styles={tw`flex items-stretch [&:hover>button]:(bg-cyan-500 text-highlight)`}
                    render={(styles) => (
                        <div css={styles}>
                            <button type="button" tw="grow py-2 chamfered-1 ui">
                                Subscribe Now!
                            </button>
                        </div>
                    )}
                />
            </form>
        </section>
    )
}

export default SubscribeNow
