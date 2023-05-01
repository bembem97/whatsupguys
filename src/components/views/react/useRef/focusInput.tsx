import { SandpackProviderProps } from "@codesandbox/sandpack-react/index"
import tw from "twin.macro"
import styles from "../styles"

const indexCode = `import { useRef } from "react";
import ReactDOM from "react-dom/client";

export default function MyComponent() {
    const inputElement = useRef();

    const focusInput = () => {
      inputElement.current.focus();
    };
  
    return (
      <>
        <input type="text" ref={inputElement} />
        <button onClick={focusInput}>Focus Input</button>
      </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyComponent />);
`

const focusInput: SandpackProviderProps & { extra?: any } = {
    extra: false,
    files: {
        "/App.js": indexCode,
        "styles.css": { code: styles, hidden: true },
    },
    options: {
        autorun: false,
    },
}

export default focusInput
