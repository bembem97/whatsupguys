import { ComponentPropsWithoutRef } from "react"
import { FrontmatterProps } from "./metadataTypes"

export interface LayoutProps extends ComponentPropsWithoutRef<"main"> {
    title: string
}

export interface ArticleProps extends LayoutProps {
    data: FrontmatterProps[]
}
