import { SandpackProviderProps } from "@codesandbox/sandpack-react/index"

const indexDoc = `<html lang="en">
<body>
    <h1>Select some text on this page:</h1>

    <p>This is a paragraph.</p>
    <div>This is some text in a div element.</div>
</body>
</html>
`

const indexStyles = `::selection {
    color: red;
    background: yellow;
  }`

const selection: SandpackProviderProps = {
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

export default selection
