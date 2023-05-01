import { SandpackProviderProps } from "@codesandbox/sandpack-react/index"

const indexDoc = `<html lang="en">
<body>
    <h1>Create a Flex Container</h1>

    <div class="flex-container">
    <div>1</div>
    <div>2</div>
    <div>3</div>  
    </div>

    <p>A Flexible Layout must have a parent element with the <em>display</em> property set to <em>flex</em>.</p>

    <p>Direct child elements(s) of the flexible container automatically becomes flexible items.</p>
</body>
</html>
`

const indexStyles = `.flex-container {
    display: flex;
    background-color: DodgerBlue;
}
  
.flex-container > div {
    background-color: #f1f1f1;
    margin: 10px;
    padding: 20px;
    font-size: 30px;
}`

const parentElementContainer: SandpackProviderProps = {
    template: "vanilla",
    files: {
        "/index.html": {
            active: true,
            code: indexDoc,
        },
        "styles.css": indexStyles,
        "index.js": { code: `import "./styles.css"`, hidden: true },
    },
}

export default parentElementContainer
