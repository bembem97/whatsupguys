import { SandpackProviderProps } from "@codesandbox/sandpack-react/index"

const indexDoc = `<html>
<body>
    <h2>My First Page</h2>

    <p id="demo"></p>
</body>
</html>
`

const indexCode = `document.getElementById("demo").innerHTML = "Hello World!";`

const domMethods: SandpackProviderProps = {
    template: "vanilla",
    files: {
        "/index.html": { code: indexDoc, active: true },
        "/index.js": indexCode,
    },
}

export default domMethods
