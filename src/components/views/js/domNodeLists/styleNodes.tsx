import { SandpackProviderProps } from "@codesandbox/sandpack-react/index"

const indexDoc = `<html>
<body>
    <h2>JavaScript HTML DOM</h2>

    <p>Hello World!</p>

    <p>Hello Aliens!</p>

    <p>Click the button to change the color of all p elements.</p>

    <button>Try it</button>
</html>
`

const indexCode = `function myFunction() {
    const myNodelist = document.querySelectorAll("p");
    for (let i = 0; i < myNodelist.length; i++) {
      myNodelist[i].style.color = "red";
    }
  }
  
  document.querySelector("button").addEventListener("click", myFunction)
`

const styleNodes: SandpackProviderProps = {
    template: "vanilla",
    files: {
        "/index.html": { code: indexDoc, active: true },
        "/index.js": { code: indexCode },
    },
}

export default styleNodes
