import { SandpackProviderProps } from "@codesandbox/sandpack-react/index"

const indexDoc = `<html lang="en">
<body>
    <h1>The flex-direction Property</h1>

    <p>The "flex-direction: column;" stacks the flex items vertically (from top to bottom):</p>

    <div class="flex-container">
    <div>1</div>
    <div>2</div>
    <div>3</div>  
    </div>
</body>
</html>
`

const indexStyles = `.flex-container {
    display: flex;
    background-color: DodgerBlue;
    /* column | column-reverse | row | row-reverse */
    flex-direction: column;
}
  
.flex-container > div {
    background-color: #f1f1f1;
    width: 100px;
    margin: 10px;
    text-align: center;
    line-height: 75px;
    font-size: 30px;
}`

const flexDirection: SandpackProviderProps = {
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

export default flexDirection
