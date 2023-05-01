import { SandpackProviderProps } from "@codesandbox/sandpack-react/index"

const document = `<html lang="en">
<body>
    <h1>Card Flip with Text</h1>
    <h3>Hover over the image below:</h3>

    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img
                    src="https://images.unsplash.com/photo-1444464666168-49d633b86797?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
                    alt="Avatar"
                    style="width:300px;height:300px; object-fit:cover"
                />
            </div>
            <div class="flip-card-back">
                <h3>Kingfisher "The King Fisher"</h3>
                <p>A Bird</p>
            </div>
        </div>
    </div>
</body>
</html>
`

const styles = `body {
    font-family: Arial, Helvetica, sans-serif;
  }
  
  .flip-card {
    background-color: transparent;
    width: 300px;
    height: 300px;
    perspective: 1000px;
  }
  
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  }
  
  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }
  
  .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  
  .flip-card-front {
    background-color: #bbb;
    color: black;
  }
  
  .flip-card-back {
    background-color: #2980b9;
    color: white;
    transform: rotateY(180deg);
  }`

const script = `import "./styles.css";`

const flipCard: SandpackProviderProps = {
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

export default flipCard
