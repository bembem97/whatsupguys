import { SandpackProviderProps } from "@codesandbox/sandpack-react/index"

const indexDoc = `<html lang="en">
<body>
    <h1 class="before">This is a heading</h1>
    
    <p>The ::before pseudo-element inserts content before the content of an element.</p>

    <h1 class="before">This is a heading</h1>

    <hr />

    <h1 class="after">This is a heading</h1>
    
    <p>The ::after pseudo-element inserts content after the content of an element.</p>

    <h1 class="after">This is a heading</h1>
</body>
</html>
`

const indexStyles = `h1.before::before, h1.after::after {
    content: url("https://images.unsplash.com/photo-1624685863152-4fa71a70d0c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&q=80");
}
`

const pseudoBeforeAfter: SandpackProviderProps = {
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

export default pseudoBeforeAfter
