import { SandpackProviderProps } from "@codesandbox/sandpack-react/index"

const indexDoc = `<html lang="en">
<body>
    <footer>
        <p>Author: Bembem Cabrera</p>
        <p>&copy; Copyright</p>
    </footer>
</body>
</html>
`

const footer: SandpackProviderProps = {
    template: "vanilla",
    files: {
        "/index.html": {
            active: true,
            code: indexDoc,
        },
        "index.js": { code: ``, hidden: true },
    },
}

export default footer
