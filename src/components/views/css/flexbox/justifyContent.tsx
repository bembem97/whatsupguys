import { SandpackProviderProps } from "@codesandbox/sandpack-react/index"

const indexDoc = `<html lang="en">
<body>
    <h1>The justify-content Property</h1>

    <p>The "justify-content: center;" aligns the flex items at the center of the container:</p>

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
    /* flex-start | flex-end | center | space-between | space-around | space-evenly */
    justify-content: center;
}

.flex-container > div {
    background-color: #f1f1f1;
    width: 100px;
    margin: 10px;
    text-align: center;
    line-height: 75px;
    font-size: 30px;
}`

const justifyContent: SandpackProviderProps = {
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

export default justifyContent
