import { FrontmatterProps } from "@dir/src/types/metadataTypes"
import React, {
    ComponentPropsWithoutRef,
    Dispatch,
    SetStateAction,
    useState,
} from "react"

export interface ArticleProviderProps {
    data: FrontmatterProps[]
    category: string
    setCategory: Dispatch<SetStateAction<string>>
}

export const ArticleContext = React.createContext<ArticleProviderProps>({
    data: [],
    category: "",
    setCategory: () => {},
})

interface Props extends ComponentPropsWithoutRef<"div"> {
    data: FrontmatterProps[]
}

const TabContext = ({ data, children }: Props) => {
    const [category, setCategory] = useState("all")
    const filter = data.filter((item) => {
        if (category === "all") {
            return item
        }

        return item.tags === category
    })

    return (
        <ArticleContext.Provider
            value={{ data: filter, setCategory, category }}
        >
            {children}
        </ArticleContext.Provider>
    )
}

export default TabContext
