// import ListGroup from "./components/ListGroup";
// import Alert from "./components/Alert";

import Alert from "./components/Alert";
import Button from "./components/Button";

// function useListGroup() {
//   const cities = ["Mumbai", "New Delhi", "Chandigarh", "Bengaluru", "Honolulu"];
//   const handleSelectItem = (item: string) => {
//     console.log("You selected", item);
//   };

//   return (
//     <div>
//       <ListGroup
//         items={cities}
//         heading="Indian Cities"
//         onSelectItem={handleSelectItem}
//       />
//     </div>
//   );
// }

import { MouseEvent, useState } from "react";

function App() {
  const [alertActive, setAlertActive] = useState(false);

  const alertCloseHandler = () => {
    console.log("Closing the alert");
    setAlertActive(false);
  };

  const buttonClickHandler = (event: MouseEvent) => {
    console.log("A button click event occured:", event);
    setAlertActive(true);
  };

  return (
    <>
      {alertActive && <Alert onClose={alertCloseHandler}>I am an alert</Alert>}
      <Button onClick={buttonClickHandler} color="secondary">
        Click Me!
      </Button>
    </>
  );
}
export default App;
