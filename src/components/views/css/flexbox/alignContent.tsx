import { SandpackProviderProps } from "@codesandbox/sandpack-react/index"

const indexDoc = `<html lang="en">
<body>
    <h1>The align-content Property</h1>

    <p>The "align-content: flex-end;" displays the flex lines at the end of the container:</p>

    <div class="flex-container">
        <div>1</div>
        <div>2</div>
        <div>3</div>  
        <div>4</div>
        <div>5</div>
        <div>6</div>  
        <div>7</div>
        <div>8</div>
        <div>9</div>  
        <div>10</div>
        <div>11</div>
        <div>12</div>  
    </div>
</body>
</html>
`

const indexStyles = `.flex-container {
    display: flex;
    height: 600px;
    flex-wrap: wrap;
    overflow: scroll;  
    background-color: DodgerBlue;
    /* stretch | center | flex-start | flex-end | space-between | space-around | space-evenly */
    align-content: flex-end;
}

.flex-container > div {
    background-color: #f1f1f1;
    width: 100px;
    margin: 10px;
    text-align: center;
    line-height: 75px;
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
