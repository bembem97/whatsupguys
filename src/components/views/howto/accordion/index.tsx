import { SandpackProviderProps } from "@codesandbox/sandpack-react/index"

const document = `<html lang="en">
<body>
    <button class="accordion">Section 1</button>
    <div class="panel">
        <p>Lorem ipsum...</p>
    </div>
    
    <button class="accordion">Section 2</button>
    <div class="panel">
        <p>Lorem ipsum...</p>
    </div>
    
    <button class="accordion">Section 3</button>
    <div class="panel">
        <p>Lorem ipsum...</p>
    </div>
</body>
</html>
`

const styles = `/* Style the buttons that are used to open and close the accordion panel */
.accordion {
    background-color: #eee;
    color: #444;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    text-align: left;
    border: none;
    outline: none;
    transition: 0.4s;
}

/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
.active,
.accordion:hover {
    background-color: #ccc;
}

/* Style the accordion panel. Note: hidden by default */
.panel {
    padding: 0 18px;
    background-color: white;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
}`

const script = `import "./styles.css";
var acc = document.getElementsByClassName("accordion")
var i

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active")
        var panel = this.nextElementSibling
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px"
        }
    })
}`

const accordion: SandpackProviderProps = {
    template: "vanilla",
    files: {
        "/index.html": {
            active: true,
            code: document,
        },
        "index.js": { code: script },
        "styles.css": { code: styles },
    },
}

export default accordion
