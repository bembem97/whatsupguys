import { SandpackProviderProps } from "@codesandbox/sandpack-react/index"
import tw from "twin.macro"
import styles from "../styles"

const indexCode = `import { useState } from "react";
import ReactDOM from "react-dom/client";

export default function MyComponent() {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
      });
      
      const updateColor = () => {
        setCar(previousState => {
          return { ...previousState, color: "blue" }
        });
      }
    
      return (
        <>
          <h1>My {car.brand}</h1>
          <p>
            It is a {car.color} {car.model} from {car.year}.
          </p>
          <button
            type="button"
            onClick={updateColor}
          >Blue</button>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyComponent />);
`

const updateObjAndArr: SandpackProviderProps & { extra?: any } = {
    extra: false,
    files: {
        "/App.js": indexCode,
        "styles.css": { code: styles, hidden: true },
    },
    options: {
        autorun: false,
    },
}

export default updateObjAndArr
