import Head from "next/head"
import React from "react"

const Meta = ({ title }: { title: string }) => {
    return (
        <Head>
            <title>{title}</title>
        </Head>
    )
}

export default Meta
