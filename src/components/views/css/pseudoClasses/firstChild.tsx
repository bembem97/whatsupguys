import { SandpackProviderProps } from "@codesandbox/sandpack-react/index"

const indexDoc = `<html lang="en">
<body>
    <p>The :first-child pseudo-class matches a specified element that is the first child of another element.
    </p>

    <h2>Match the first &lt;p&gt; element</h2>

    <p>In the following example, the selector matches any <p> element that is the first child of any element:
    </p>

    <div class="box">
        <p class="first-example">This is some text.</p>
        <p class="first-example">This is some text.</p>

        <div>
            <p class="first-example">This is some text.</p>
            <p class="first-example">This is some text.</p>
        </div>
    </div>

    <hr />

    <h2>Match the first &lt;i&gt; element in all &lt;p&gt; elements</h2>
    <p>In the following example, the selector matches the first &lt;i&gt; element in all &lt;p&gt; elements:
    </p>

    <div class="box">
        <p class="second-example">I am a <i>strong</i> person. I am a <i>strong</i> person.</p>
        <p class="second-example">I am a <i>strong</i> person. I am a <i>strong</i> person.</p>
    </div>

    <hr />

    <h2>Match all &lt;i&gt; elements in all first child &lt;p&gt; elements</h2>
    <p>In the following example, the selector matches all &lt;i&gt; elements in &lt;p&gt; elements that are the first child of another element:
    </p>

    <div class="box">
        <p class="third-example">I am a <i>strong</i> person. I am a <i>strong</i> person.</p>
        <p class="third-example">I am a <i>strong</i> person. I am a <i>strong</i> person.</p>

        <div>
            <p class="third-example">I am a <i>strong</i> person. I am a <i>strong</i> person.</p>
            <p class="third-example">I am a <i>strong</i> person. I am a <i>strong</i> person.</p>
        </div>
    </div>
</body>
</html>
`

const indexStyles = `p.first-example:first-child {
    color: blue;
}

p.second-example i:first-child {
    color: blue;
  } 

p.third-example:first-child i {
    color: blue;
} 

.box {
    border: 1px solid black;
}`

const firstChild: SandpackProviderProps = {
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

export default firstChild
