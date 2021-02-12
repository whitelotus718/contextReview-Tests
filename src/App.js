import { Route } from "react-router-dom";
import SelectedCoffeeBean from "./components/SelectedCoffeeBean";
import SetCoffeeBean from "./components/SetCoffeeBean";
import coffeeBean from "./mockData/coffeeBeans.json";


function App() {
  return (
    <>
      <h1>Welcome to Coffee App</h1>
      <SelectedCoffeeBean />
      <SetCoffeeBean coffeeBeans={coffeeBean} />
    </>
  );
}

export default App;
