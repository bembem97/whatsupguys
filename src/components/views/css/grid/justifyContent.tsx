import { SandpackProviderProps } from "@codesandbox/sandpack-react/index"

const indexDoc = `<html lang="en">
<body>
    <h1>The justify-content Property</h1>

    <p>Use the <em>justify-content</em> property to align the grid inside the container.</p>

    <p>The value "space-evenly" will give the columns equal amount of space between, and around them:</p>

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
    grid-template-columns: 50px 50px 50px; /*Make the grid smaller than the container*/
    gap: 10px;
    background-color: #2196F3;
    padding: 10px;
    /* space-evenly | space-around | space-between | center | start | end */
    justify-content: space-evenly;
}

.grid-container > div {
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding: 20px 0;
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
