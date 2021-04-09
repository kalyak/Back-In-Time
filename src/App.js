import { useState } from "react";
import { Container, Button } from "react-bootstrap";
import "./App.css";
import Clock from "./components/Clock";
import { ClockProvider } from "./components/context/ClockContext";
import { DecrementProvider } from "./components/context/DecrementContext";
import UserInput from "./components/UserInput";

function App() {
  // const [decrement, setDecrement] = useState(0);
  // const [clock, setClock] = useState(false);

  return (
    <div className='App'>
      <DecrementProvider>
        <ClockProvider>
          <h1>Decremental Clock</h1>
          {/* {clock ? (
        <Container>
          <Clock decrement={decrement} />
          <Button
            onClick={() => {
              setClock(false);
            }}
          >
            Change decrement
          </Button>
        </Container>
      ) : (
        <UserInput
          decrement={decrement}
          setDecrement={setDecrement}
          setClock={setClock}
        />
      )} */}
          <UserInput />
          <Clock />
        </ClockProvider>
      </DecrementProvider>
    </div>
  );
}

export default App;
