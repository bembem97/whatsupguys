import { SandpackProviderProps } from "@codesandbox/sandpack-react/index"

const indexDoc = `<html lang="en">
<body>
    <article>
        <header>
            <h1>What Does WWF Do?</h1>
            <p>WWF's mission:</p>
        </header>
        
        <p>WWF's mission is to stop the degradation of our planet's natural environment,
        and build a future in which humans live in harmony with nature.</p>
    </article>
</body>
</html>
`

const header: SandpackProviderProps = {
    template: "vanilla",
    files: {
        "/index.html": {
            active: true,
            code: indexDoc,
        },
        "index.js": { code: ``, hidden: true },
    },
}

export default header
