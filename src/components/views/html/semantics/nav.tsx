import { SandpackProviderProps } from "@codesandbox/sandpack-react/index"

const indexDoc = `<html lang="en">
<body>
    <nav>
    <a href="javascript:void(0)">HTML</a> |
    <a href="javascript:void(0)">CSS</a> |
    <a href="javascript:void(0)">JavaScript</a> |
    <a href="javascript:void(0)">React</a>
    </nav>
</body>
</html>
`

const nav: SandpackProviderProps = {
    template: "vanilla",
    files: {
        "/index.html": {
            active: true,
            code: indexDoc,
        },
        "index.js": { code: ``, hidden: true },
    },
}

export default nav
