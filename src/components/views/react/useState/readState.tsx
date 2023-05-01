import { SandpackProviderProps } from "@codesandbox/sandpack-react/index"
import tw from "twin.macro"
import styles from "../styles"

const indexCode = `import { useState } from "react";
import ReactDOM from "react-dom/client";

export default function MyComponent() {
    const [color, setColor] = useState("red");

    return <h1>My favorite color is {color}!</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyComponent />);
`

const readState: SandpackProviderProps & { extra?: any } = {
    extra: false,
    files: {
        "/App.js": indexCode,
        "styles.css": { code: styles, hidden: true },
    },
    options: {
        autorun: false,
    },
}

export default readState
