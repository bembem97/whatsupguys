import { SandpackProviderProps } from "@codesandbox/sandpack-react/index"

const indexDoc = `<html>
<body>
    <h2>JavaScript HTML DOM</h2>

    <p id="intro">Finding HTML Elements by Id</p>
    <p>This example demonstrates the <b>getElementsById</b> method.</p>

    <p id="demo"></p>
</body>
</html>
`

const indexCode = `const element = document.getElementById("intro");

document.getElementById("demo").innerHTML = 
"The text from the intro paragraph is: " + element.innerHTML;`

const byId: SandpackProviderProps = {
    template: "vanilla",
    files: {
        "/index.html": { code: indexDoc, active: true },
        "/index.js": indexCode,
    },
}

export default byId
