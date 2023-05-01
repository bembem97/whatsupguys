import React from "react"
import { SandpackProviderProps } from "@codesandbox/sandpack-react"
import dynamic from "next/dynamic"
import LoadingEditor from "./loading"

const MySandpack = dynamic(() => import("./MySandpack"), {
    loading: () => <LoadingEditor />,
    ssr: false,
})

type Props = SandpackProviderProps

const Editor = ({ ...props }: Props) => {
    return <MySandpack {...props} />
}

export default Editor
