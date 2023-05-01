import { SandpackProviderProps } from "@codesandbox/sandpack-react/index"

const indexDoc = `<html lang="en">
<body>
    <ul>
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
    </ul>

    <ol>
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
    </ol>
</body>
</html>
`

const indexStyles = `::marker { 
    color: red;
    font-size: 23px;
}`

const marker: SandpackProviderProps = {
    template: "vanilla",
    files: {
        "/index.html": {
            active: true,
            code: indexDoc,
        },
        "styles.css": indexStyles,
        "index.js": { code: `import "./styles.css"`, hidden: true },
    },
}

export default marker
