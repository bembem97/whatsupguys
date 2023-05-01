import { SandpackProviderProps } from "@codesandbox/sandpack-react/index"

const indexDoc = `<html>
<body>
    <h2>JavaScript HTML DOM</h2>

    <p>Hello World!</p>

    <p>Hello Aliens!</p>

    <p id="demo"></p>
</html>
`

const indexCode = `const myNodelist = document.querySelectorAll("p");

document.getElementById("demo").innerHTML = "The innerHTML of the second paragraph is: " + myNodelist[1].innerHTML;
`

const accessByIndex: SandpackProviderProps = {
    template: "vanilla",
    files: {
        "/index.html": { code: indexDoc, active: true },
        "/index.js": { code: indexCode },
    },
}

export default accessByIndex
