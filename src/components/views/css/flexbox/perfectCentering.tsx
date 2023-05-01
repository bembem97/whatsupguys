import { SandpackProviderProps } from "@codesandbox/sandpack-react/index"

const indexDoc = `<html lang="en">
<body>
    <h1>Perfect Centering</h1>

    <p>A flex container with both the justify-content and the align-items properties set to <em>center</em> will align the item(s) in the center (in both axis).</p>

    <div class="flex-container">
        <div></div>
    </div>
</body>
</html>
`

const indexStyles = `.flex-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    background-color: DodgerBlue;
}

.flex-container > div {
    background-color: #f1f1f1;
    color: white;
    width: 100px;
    height: 100px;
}`

const perfectCentering: SandpackProviderProps = {
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

export default perfectCentering
