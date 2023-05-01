import { SandpackProviderProps } from "@codesandbox/sandpack-react/index"

const indexDoc = `<html>
<body>
    <h2>JavaScript HTML DOM</h2>

    <p>Finding HTML Elements by Query Selector</p>
    <p class="intro">Hello World!.</p>
    <p class="intro">This example demonstrates the <b>querySelectorAll</b> method.</p>

    <p id="demo"></p>
</body>
</html>
`

const indexCode = `const x = document.querySelectorAll("p.intro");
document.getElementById("demo").innerHTML = 
'The first paragraph (index 0) with class="intro" is: ' + x[0].innerHTML;`

const byCSSSelector: SandpackProviderProps = {
    template: "vanilla",
    files: {
        "/index.html": { code: indexDoc, active: true },
        "/index.js": indexCode,
    },
}

export default byCSSSelector
