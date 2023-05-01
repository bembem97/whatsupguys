import { SandpackProviderProps } from "@codesandbox/sandpack-react/index"

const indexDoc = `<html>
<body>
    <h2>JavaScript HTML DOM</h2>

    <p>Finding HTML Elements by Tag Name.</p>
    <p>This example demonstrates the <b>getElementsByTagName</b> method.</p>

    <p id="demo"></p>
</body>
</html>
`

const indexCode = `const element = document.getElementsByTagName("p");

document.getElementById("demo").innerHTML = 'The text in first paragraph (index 0) is: ' + element[0].innerHTML;`

const byTagName: SandpackProviderProps = {
    template: "vanilla",
    files: {
        "/index.html": { code: indexDoc, active: true },
        "/index.js": indexCode,
    },
}

export default byTagName
