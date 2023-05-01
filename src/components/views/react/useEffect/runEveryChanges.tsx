import { SandpackProviderProps } from "@codesandbox/sandpack-react/index"
import tw from "twin.macro"
import styles from "../styles"

const indexCode = `import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

export default function MyComponent() {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);
  
    useEffect(() => {
      setCalculation(() => count * 2);
    }, [count]); // <- add the count variable here
  
    return (
      <>
        <p>Count: {count}</p>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
        <p>Calculation: {calculation}</p>
      </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyComponent />);
`

const runEveryChanges: SandpackProviderProps & { extra?: any } = {
    extra: false,
    files: {
        "/App.js": indexCode,
        "styles.css": { code: styles, hidden: true },
    },
    options: {
        autorun: false,
    },
}

export default runEveryChanges
