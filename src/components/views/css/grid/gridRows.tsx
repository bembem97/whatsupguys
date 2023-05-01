import { SandpackProviderProps } from "@codesandbox/sandpack-react/index"

const indexDoc = `<html lang="en">
<body>
    <h1>The grid-template-rows Property</h1>

    <div class="grid-container">
        <div>1</div>
        <div>2</div>
        <div>3</div>  
        <div>4</div>
        <div>5</div>
        <div>6</div>  
    </div>

    <p>Use the <em>grid-template-rows</em> property to specify the size (height) of each row.</p>  
</body>
</html>
`

const indexStyles = `.grid-container {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: 80px 200px;
    gap: 10px;
    background-color: #2196F3;
    padding: 10px;
}

.grid-container > div {
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding: 20px 0;
    font-size: 30px;
}`

const gridRows: SandpackProviderProps = {
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

export default gridRows
