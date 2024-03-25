import "./App.css";
import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  const [alertActive, setAlertActive] = useState(false);

  const buttonClickHandler = () => {
    setAlertActive(true);
  };

  const onCloseHandler = () => {
    setAlertActive(false);
  };

  return (
    <div className="App">
      {alertActive && (
        <Alert onClose={onCloseHandler}>Custom alert message</Alert>
      )}
      <Button onClick={buttonClickHandler}>Show alert!</Button>
    </div>
  );
}

export default App;
