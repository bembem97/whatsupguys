import { ClassNames } from "@emotion/react"
import { Transition } from "@headlessui/react"
import Tabs from "@shared/navigations/Tabs"
import React, {
    ComponentPropsWithoutRef,
    Dispatch,
    SetStateAction,
    createContext,
    useState,
} from "react"
import tw from "twin.macro"

export interface DropdownProps {
    isShown: boolean
    setIsShown: Dispatch<SetStateAction<boolean>>
}

export const DropdownContext = createContext<DropdownProps | null>(null)

const Dropdown = ({ children }: ComponentPropsWithoutRef<"div">) => {
    const [isShown, setIsShown] = useState<boolean>(true)

    return (
        <DropdownContext.Provider value={{ isShown, setIsShown }}>
            {children}
        </DropdownContext.Provider>
    )
}

export default Dropdown
