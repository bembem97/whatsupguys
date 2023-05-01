import { SandpackProviderProps } from "@codesandbox/sandpack-react/index"

const indexDoc = `<html>
<body>
    <h1 id="id1">My Heading 1</h1>

    <button type="button" 
    onclick="document.getElementById('id1').style.color = 'red'">
    Click Me!</button>
</html>
`

const indexCode = ``

const domCSS: SandpackProviderProps = {
    template: "vanilla",
    files: {
        "/index.html": { code: indexDoc, active: true },
        "/index.js": { code: indexCode, hidden: true },
    },
}

export default domCSS
