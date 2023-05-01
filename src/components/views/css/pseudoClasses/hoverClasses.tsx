import { SandpackProviderProps } from "@codesandbox/sandpack-react/index"

const indexDoc = `<html lang="en">
<body>
    <h2>Pseudo-classes and HTML Classes</h2>

    <p>When you hover over the first link below, it will change color and font size:</p>

    <p><a class="highlight" href="css_syntax.asp">CSS Syntax</a></p>

    <p><a href="default.asp">CSS Tutorial</a></p>


    <hr />
    <hr />

    <div class="tooltip">Hover over this div element to show the p element
        <p class="tooltip-content">Tada! Here I am!</p>
    </div>

    <hr />
    <hr />

    <p>Mouse over the div element below to change its background color:</p>

    <div class="bg">Mouse Over Me</div>
</div>
</body>
</html>
`

const indexStyles = `a.highlight:hover {
    color: #ff0000;
    font-size: 22px;
} 

div.bg {
    background-color: green;
    color: white;
    padding: 25px;
    text-align: center;
}

div.bg:hover {
    background-color: blue;
}

p.tooltip-content {
    display: none;
    background-color: yellow;
    padding: 20px;
}
  
div.tooltip:hover p.tooltip-content {
    display: block;
}`

const hoverClasses: SandpackProviderProps = {
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

export default hoverClasses
