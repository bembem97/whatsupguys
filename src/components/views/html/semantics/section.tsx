import { SandpackProviderProps } from "@codesandbox/sandpack-react/index"

const indexDoc = `<html lang="en">
<body>
    <section>
        <h1>WWF</h1>
        <p>The World Wide Fund for Nature (WWF) is an international organization working on issues regarding the conservation, research and restoration of the environment, formerly named the World Wildlife Fund. WWF was founded in 1961.</p>
    </section>
    
    <section>
        <h1>WWF's Panda symbol</h1>
        <p>The Panda has become the symbol of WWF. The well-known panda logo of WWF originated from a panda named Chi Chi that was transferred from the Beijing Zoo to the London Zoo in the same year of the establishment of WWF.</p>
    </section>
</body>
</html>
`

const section: SandpackProviderProps = {
    template: "vanilla",
    files: {
        "/index.html": {
            active: true,
            code: indexDoc,
        },
        "index.js": { code: ``, hidden: true },
    },
}

export default section
