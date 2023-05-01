import { SandpackProviderProps } from "@codesandbox/sandpack-react/index"

const indexDoc = `<html lang="en">
<body>
    <h3>The href Attribute</h3>
    <a href="https://www.w3schools.com" target="_blank">Visit W3Schools</a>

    <hr />
    
    <h3>The src Attribute</h3>
    <img src="https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="W3Schools.com" />

    <hr />

    <h3>The width and height Attributes</h3>
    <img src="https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" width="500" height="600" />

    <hr />

    <h3>The alt Attribute</h3>
    <img src="https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Cute Kitten" />
    
    <hr />

    <h3>The style Attribute</h3>
    <p style="color:red;">This is a red paragraph.</p>
     
    <hr />

    <h3>The title Attribute</h3>
    <p title="I'm a tooltip">This is a paragraph.</p>
</body>
</html>
`

const attributes: SandpackProviderProps = {
    template: "vanilla",
    files: {
        "/index.html": {
            active: true,
            code: indexDoc,
        },
        "index.js": { code: ``, hidden: true },
    },
}

export default attributes
