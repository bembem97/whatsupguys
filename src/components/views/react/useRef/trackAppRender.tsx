import { SandpackProviderProps } from "@codesandbox/sandpack-react/index"
import tw from "twin.macro"
import styles from "../styles"

const indexCode = `import { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

export default function MyComponent() {
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);
  
    useEffect(() => {
      count.current = count.current + 1;
    });
  
    return (
      <>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <h1>Render Count: {count.current}</h1>
      </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyComponent />);
`

const trackAppRender: SandpackProviderProps & { extra?: any } = {
    extra: false,
    files: {
        "/App.js": indexCode,
        "styles.css": { code: styles, hidden: true },
    },
    options: {
        autorun: false,
    },
}

export default trackAppRender
