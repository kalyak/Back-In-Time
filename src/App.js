import "./App.css";
import Clock from "./components/Clock";
import { ClockProvider } from "./components/context/ClockContext";
import { DecrementProvider } from "./components/context/DecrementContext";
import UserInput from "./components/UserInput";

function App() {
  return (
    <div className='App'>
      <DecrementProvider>
        <ClockProvider>
          <h1>Decremental Clock</h1>
          <UserInput />
          <Clock />
        </ClockProvider>
      </DecrementProvider>
    </div>
  );
}

export default App;
