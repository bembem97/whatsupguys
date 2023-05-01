import OnTarget from "@shared/decorations/OnTarget"
import React, { useContext } from "react"
import { DropdownContext } from "."
import tw from "twin.macro"

const DropdownButton = () => {
    const context = useContext(DropdownContext)
    if (!context) return <div></div>

    const { setIsShown, isShown } = context

    return (
        <OnTarget
            lock={true}
            styles={tw`p-1 inline-grid place-items-center w-full h-full bg-dark/80`}
            render={(styles) => (
                <button
                    title="collapse menu"
                    onClick={() => setIsShown(!isShown)}
                    tw="inline-grid place-items-center focus:outline-none"
                    className="group"
                    css={styles}
                >
                    <span tw="rounded-full w-8 h-8 border-2 border-primary border-dotted inline-grid place-items-center hover:bg-highlight group-hover:border-secondary transition-colors">
                        <i tw="w-2 h-2 bg-primary rounded-full group-hover:bg-secondary transition-colors"></i>
                    </span>
                </button>
            )}
        />
    )
}

export default DropdownButton
