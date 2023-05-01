import { SandpackProviderProps } from "@codesandbox/sandpack-react/index"

const indexDoc = `<html>
<body>
    <h2>JavaScript HTML DOM</h2>

    <p>Hellow World!</p>

    <p>Hellow Aliens!</p>

    <p id="demo"></p>
</html>
`

const indexCode = `const myNodelist = document.querySelectorAll("p");

document.getElementById("demo").innerHTML = "This document contains " + myNodelist.length + " paragraphs.";
`

const nodeLength: SandpackProviderProps = {
    template: "vanilla",
    files: {
        "/index.html": { code: indexDoc, active: true },
        "/index.js": { code: indexCode },
    },
}

export default nodeLength
