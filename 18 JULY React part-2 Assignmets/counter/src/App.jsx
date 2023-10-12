import { useState } from "react";
import "./App.css";
import Button from "./Button/Button";

function App() {
  const [count, setCount] = useState(0);

  function click(isIncrement) {
    isIncrement ? setCount(count + 1) : setCount(count - 1);
  }

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <h1>{count}</h1>
          <div className="buttons">
            <Button text="increment" click={click} isIncrement={true} />
            <Button text="decrement" click={click} isIncrement={false} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
