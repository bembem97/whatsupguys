import { SandpackProviderProps } from "@codesandbox/sandpack-react/index"

const intro: SandpackProviderProps = {
    template: "vanilla",
    files: {
        "/index.html": {
            active: true,
            code: `<html lang="en">
    <body>
        <h1>This is heading 1</h1>
        <h2>This is heading 2</h2>
        <h3>This is heading 3</h3>

        <hr />

        <p>This is a paragraph.</p>
        <p>This is another paragraph.</p>

        <hr />

        <a href="https://www.w3schools.com" target="_blank">This is a link</a>

        <hr />

        <img src="https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="W3Schools.com" width="150" height="150" style="object-fit: contain;" />
    </body>
</html>
`,
        },
        "index.js": { code: ``, hidden: true },
    },
}

export default intro
