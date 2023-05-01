import fs from "fs"
import path from "path"
import { serialize } from "next-mdx-remote/serialize"

import { FrontmatterProps } from "../types/metadataTypes"

import remarkGFM from "remark-gfm"
import remarkPrism from "remark-prism"
import { MDXRemoteSerializeResult } from "next-mdx-remote"

const mdxDir = path.join(process.cwd(), "src/markdown")

const readMdxFiles = () => {
    const files = fs.readdirSync(mdxDir)
    return files
}

export const readFileContent = (file: string) => {
    const mdxFile = path.join(mdxDir, file)

    try {
        const readFile = fs.readFileSync(mdxFile, "utf8")
        return readFile
    } catch (e) {
        return false
    }
}

export const getFrontmatter = async () => {
    const readDir = readMdxFiles()
    const data = (await Promise.all(
        readDir.map(async (file) => {
            const getContent = readFileContent(file)
            let data

            if (typeof getContent === "string") {
                data = await serialize(getContent, { parseFrontmatter: true })
            }

            if (typeof data !== "undefined") {
                return {
                    ...data.frontmatter,
                    pagename: file.replace(/.mdx$/, ""),
                }
            }

            return
        })
    )) as FrontmatterProps[]

    const sortByDate = data.sort(
        (a: FrontmatterProps, b: FrontmatterProps) =>
            Number(new Date(b.createdAt)) - Number(new Date(a.createdAt))
    )

    return sortByDate
}

type ContentProps = MDXRemoteSerializeResult & {
    frontmatter: FrontmatterProps
}

export const getArticleContent = async (param: string) => {
    const file = readFileContent(`${param}.mdx`)

    if (typeof file === "boolean" && file === false) {
        return { content: false }
    }

    const content: ContentProps = await serialize(file, {
        parseFrontmatter: true,
        mdxOptions: { remarkPlugins: [remarkPrism, remarkGFM] },
    })

    return { content }
}

interface Props {
    articleType?: string
    category?: string
}

export const getMetaDatas = async (arg?: Props) => {
    const frontmatter = (await getFrontmatter()) as FrontmatterProps[]
    let data = frontmatter

    if (typeof arg === "object" && "articleType" in arg) {
        const postType = typeof arg?.articleType !== "undefined"

        const filtered = frontmatter.filter(
            (item) => postType && item.articleType === arg?.articleType
        )
        data = filtered
    }

    if (typeof arg === "object" && "category" in arg) {
        const category = arg?.category

        const filtered = data.filter(
            (item) => typeof category !== "undefined" && item.tags === category
        )
        data = filtered
    }

    return data
}
