import { SandpackProviderProps } from "@codesandbox/sandpack-react/index"

const document = `<html lang="en">
<body>
    <div class="wrapper">
        <header>
            <img
                src="https://images.unsplash.com/photo-1612353238806-d588a88cb474?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870"
                alt="mountain"
                class="background"
            />
            <img
                src="https://cdn.pixabay.com/photo/2016/02/04/13/49/the-earth-1179212_960_720.png"
                alt="trees"
                class="foreground"
            />
            <h1 class="h1">Parallax</h1>
        </header>

        <section>
            Sunt incididunt eiusmod veniam cupidatat sunt non velit labore. Laboris
            nisi velit nulla ea amet labore Lorem exercitation ut nulla. Consequat
            ea esse consectetur minim anim do dolore proident. Cillum officia nulla
            deserunt tempor consequat deserunt occaecat. Excepteur eiusmod sunt amet
            cillum incididunt id nulla velit ullamco fugiat sunt. Mollit Lorem
            fugiat ut duis anim nisi aute eu laboris consectetur sit. Consequat sunt
            aliquip aliquip deserunt dolor pariatur reprehenderit reprehenderit esse
            id magna. Sit anim proident amet dolore occaecat ea exercitation mollit.
            Nulla velit commodo reprehenderit ipsum ex in laborum tempor laborum
            ipsum id. Eu aliquip ad magna dolore aliquip incididunt. Voluptate
            aliquip ullamco occaecat commodo sint eu ut aute in et labore ex et id.
            Nisi nisi Lorem do cupidatat sunt aliquip eiusmod. Eiusmod aliqua Lorem
            officia do aute anim dolore nisi labore.
        </section>
    </div>
</body>
</html>
`

const styles = `body {
    margin: 0;
}

h1.h1 {
    padding: 4px 8px;
    border-radius: 4px;
    background-color: forestgreen;
    color: white;
}

.wrapper {
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh;
    perspective: 10px;
}

header {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    transform-style: preserve-3d;
    z-index: -1;
}

section {
    background: rgb(25, 25, 25);
    color: white;
    padding: 1rem 2rem;
}

.background {
    transform: translateZ(-10px) scale(2);
    background-color: white;
}

.foreground {
    transform: translateZ(-5px) scale(0.5);
    height: initial !important;
}

.foreground,
.background {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: -1;
}

img {
    display: block;
    width: 100%;
    height: auto;
}`

const parallax: SandpackProviderProps = {
    template: "vanilla",
    files: {
        "/index.html": {
            active: true,
            code: document,
        },
        "index.js": { code: `import "./styles.css"`, hidden: true },
        "styles.css": { code: styles },
    },
}

export default parallax
