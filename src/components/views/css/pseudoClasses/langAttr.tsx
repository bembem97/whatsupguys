import { SandpackProviderProps } from "@codesandbox/sandpack-react/index"

const indexDoc = `<html lang="en">
<body>
    <p>Some text <q lang="no">A quote in a paragraph</q> Some text.</p>
    
    <p>In this example, :lang defines the quotation marks for q elements with lang="no":</p>
</body>
</html>
`

const indexStyles = `q:lang(no) {
    quotes: "~" "~";
}`

const langAttr: SandpackProviderProps = {
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

export default langAttr
