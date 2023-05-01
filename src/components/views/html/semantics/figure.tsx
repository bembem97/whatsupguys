import { SandpackProviderProps } from "@codesandbox/sandpack-react/index"

const indexDoc = `<html lang="en">
<body>
    <figure>
    <img src="https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="W3Schools.com" width="250" height="250" style="object-fit: contain;" />
    <figcaption>Fig1. - Kitten.</figcaption>
    </figure>
</body>
</html>
`

const figure: SandpackProviderProps = {
    template: "vanilla",
    files: {
        "/index.html": {
            active: true,
            code: indexDoc,
        },
        "index.js": { code: ``, hidden: true },
    },
}

export default figure
