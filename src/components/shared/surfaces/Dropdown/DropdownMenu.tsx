import { ClassNames } from "@emotion/react"
import { Transition } from "@headlessui/react"
import React, { useContext } from "react"
import { DropdownContext, DropdownProps } from "."
import tw from "twin.macro"
import Tabs from "@shared/navigations/Tabs"

const DropdownMenu = () => {
    const context = useContext<DropdownProps | null>(DropdownContext)
    if (!context) return <div></div>

    const { isShown } = context

    return (
        <ClassNames>
            {({ css }) => (
                <Transition
                    show={isShown}
                    tw="overflow-hidden h-[minmax(0px,auto)]"
                >
                    <Transition.Child
                        tw="relative before:(absolute inset-0 border-y border-primary/25)"
                        enter={css(tw`transition-max-height duration-300`)}
                        enterFrom={css(tw`max-h-0`)}
                        enterTo={css(tw`max-h-[theme("height.28")]`)}
                        leave={css(tw`transition-max-height duration-300`)}
                        leaveFrom={css(tw`max-h-[theme("height.28")]`)}
                        leaveTo={css(tw`max-h-0`)}
                    >
                        <div tw="py-4">
                            <Tabs />
                        </div>
                    </Transition.Child>
                </Transition>
            )}
        </ClassNames>
    )
}

export default DropdownMenu
