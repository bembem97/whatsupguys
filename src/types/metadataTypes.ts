export interface FrontmatterProps {
    author: string
    image: string
    createdAt: string
    tags: string
    title: string
    excerpt: string
    pagename: string
    reference: string
    articleType: string
    source: string
}

export interface DataProps {
    [key: string]: FrontmatterProps[]
}
