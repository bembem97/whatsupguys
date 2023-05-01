import Editor from "@shared/utilities/Editor"
import { KeyProps } from "../components/views"

const previews = (preview: KeyProps) => {
    if (typeof preview === "undefined" || !preview) {
        return {}
    }

    const PREVIEW = Object.keys(preview)
    const previewReduce = PREVIEW.reduce((accumulator, current) => {
        const propName = `${current.charAt(0).toUpperCase()}${current.slice(1)}`
        accumulator[propName] = { ...preview[current] }

        return accumulator
    }, {} as any)

    let Arr: any = {}

    Object.keys(previewReduce).forEach((Prop) => {
        const propName = `${Prop.charAt(0).toLowerCase()}${Prop.slice(1)}`
        Arr = {
            ...Arr,
            [Prop]: () => <Editor {...preview[propName]} />,
        }
    })

    return Arr
}

export default previews
