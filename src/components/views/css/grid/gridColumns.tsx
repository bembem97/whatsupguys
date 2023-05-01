import { SandpackProviderProps } from "@codesandbox/sandpack-react/index"

const indexDoc = `<html lang="en">
<body>
    <h1>The grid-template-columns Property</h1>

    <p>You can use the <em>grid-template-columns</em> property to specify the number of columns in your grid layout.</p>

    <div class="grid-container auto-columns">
        <div>1</div>
        <div>2</div>
        <div>3</div>  
        <div>4</div>
        <div>5</div>
        <div>6</div>  
        <div>7</div>
        <div>8</div>
    </div>

    <hr />

    <p>Use the <em>grid-template-columns</em> property to specify the size of each column.</p>

    <div class="grid-container fixed-columns">
        <div>1</div>
        <div>2</div>
        <div>3</div>  
        <div>4</div>
        <div>5</div>
        <div>6</div>  
        <div>7</div>
        <div>8</div>
    </div>  
</body>
</html>
`

const indexStyles = `.grid-container {
    display: grid;
    gap: 10px;
    background-color: #2196F3;
    padding: 10px;
}

.auto-columns {
    grid-template-columns: auto auto auto auto;
}

.fixed-columns {
    grid-template-columns: 80px 200px auto 30px;
}

.grid-container > div {
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding: 20px 0;
    font-size: 30px;
}`

const gridColumns: SandpackProviderProps = {
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

export default gridColumns
