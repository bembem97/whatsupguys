import { SandpackProviderProps } from "@codesandbox/sandpack-react/index"

const indexDoc = `<html lang="en">
<body>
    <h1>The flex-wrap Property</h1>

    <p>The "flex-wrap: wrap;" specifies that the flex items will wrap if necessary:</p>

    <div class="flex-container bg">
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

    <p>Try resizing the container.</p>
</body>
</html>
`

const indexStyles = `.flex-container {
    display: flex;
    flex-wrap: wrap;
    resize: horizontal;
    overflow: auto;
    border: 2px solid;
}

.flex-container > div {
    background-color: #f1f1f1;
    width: 100px;
    margin: 10px;
    text-align: center;
    line-height: 75px;
    font-size: 30px;
}

.bg {
    background-color: DodgerBlue;
    background-image: linear-gradient(red 100%,transparent);
    background-size: 20px 20px;
    background-position: right bottom;
    background-repeat: no-repeat;
}
`

const flexWrap: SandpackProviderProps = {
    template: "vanilla",
    files: {
        "/index.html": {
            active: true,
            code: indexDoc,
        },
        "styles.css": indexStyles,
        "index.js": {
            code: `import "./styles.css"`,
            hidden: true,
        },
    },
}

export default flexWrap
