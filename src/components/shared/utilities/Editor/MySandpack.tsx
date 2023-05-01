import React from "react"
import {
    SandpackProvider,
    SandpackLayout,
    SandpackCodeEditor,
    SandpackPreview,
    SandpackProviderProps,
} from "@codesandbox/sandpack-react"
import theme from "./styles"
import tw from "twin.macro"
import { ClassNames } from "@emotion/react"

type Props = SandpackProviderProps

const MySandpack = ({ ...props }: Props) => {
    return (
        <ClassNames>
            {({ css }) => (
                <SandpackProvider
                    template={props.template || "react"}
                    theme={theme}
                    {...props}
                    options={{
                        ...props.options,
                        classes: {
                            "sp-button": css(
                                tw`border border-primary text-primary neon-text`
                            ),
                            "sp-wrapper": css(tw`@container/editor`),
                            "sp-layout": css(
                                tw`grid @tab/editor:(grid-cols-2)`
                            ),
                            "sp-preview-container": css(tw`bg-dark`),
                        },
                    }}
                >
                    <SandpackLayout>
                        <SandpackCodeEditor />
                        <SandpackPreview />
                    </SandpackLayout>
                </SandpackProvider>
            )}
        </ClassNames>
    )
}

export default MySandpack
