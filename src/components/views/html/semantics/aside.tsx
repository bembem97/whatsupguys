import { SandpackProviderProps } from "@codesandbox/sandpack-react/index"

const indexDoc = `<html>
<body>

    <p>My family and I visited The Epcot center this summer. The weather was nice, and Epcot was amazing! I had a great summer together with my family!</p>

    <aside>
        <p>The Epcot center is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
    </aside>

    <p>My family and I visited The Epcot center this summer. The weather was nice, and Epcot was amazing! I had a great summer together with my family!</p>
    <p>My family and I visited The Epcot center this summer. The weather was nice, and Epcot was amazing! I had a great summer together with my family!</p>
</body>
</html>
`

const styles = `aside {
    width: 30%;
    padding-left: 15px;
    margin-left: 15px;
    float: right;
    font-style: italic;
    background-color: lightgray;
}`

const aside: SandpackProviderProps = {
    template: "vanilla",
    files: {
        "/index.html": {
            active: true,
            code: indexDoc,
        },
        "index.js": { code: `import "./styles.css"`, hidden: true },
        "styles.css": { code: styles },
    },
}

export default aside
