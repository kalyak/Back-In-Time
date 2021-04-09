import { useState } from "react";
import { Container, Button } from "react-bootstrap";
import "./App.css";
import Clock from "./components/Clock";
import UserInput from "./components/UserInput";

function App() {
  const [decrement, setDecrement] = useState(0);
  const [clock, setClock] = useState(false);

  return (
    <div className='App'>
      <h1>Decremental Clock</h1>
      {clock ? (
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
      )}
    </div>
  );
}

export default App;
