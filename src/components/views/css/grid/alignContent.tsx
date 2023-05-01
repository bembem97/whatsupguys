import { SandpackProviderProps } from "@codesandbox/sandpack-react/index"

const indexDoc = `<html lang="en">
<body>
    <h1>The align-content Property</h1>

    <p>Use the <em>align-content</em> property to vertically align the grid inside the container.</p>

    <p>The value "center" will align the rows in the middle of the container:</p>

    <div class="grid-container">
        <div>1</div>
        <div>2</div>
        <div>3</div>  
        <div>4</div>
        <div>5</div>
        <div>6</div>  
    </div>
</body>
</html>
`

const indexStyles = `.grid-container {
    display: grid;
    height: 400px;
    grid-template-columns: auto auto auto;
    gap: 10px;
    background-color: #2196F3;
    padding: 10px;
    /* center | space-evenly | space-around | space-between | start | end */
    align-content: center;
}

.grid-container > div {
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding: 20px 0;
    font-size: 30px;
}`

const alignContent: SandpackProviderProps = {
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

export default alignContent