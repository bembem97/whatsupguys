import { SandpackProviderProps } from "@codesandbox/sandpack-react/index"

const indexDoc = `<html lang="en">
<body>
    <p>You can use the ::first-letter pseudo-element to add a special effect to the first character of a text!</p>

    <hr />

    <h2 class="intro">This is an introduction.</h2>
</body>
</html>
`

const indexStyles = `p::first-letter {
    color: #ff0000;
    font-size: xx-large;
}

h2.intro::first-letter {
    color: #ff0000;
    font-size: 200%;
}`

const firstLetter: SandpackProviderProps = {
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

export default firstLetter
