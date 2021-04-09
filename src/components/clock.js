import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { ClockContext } from "./context/ClockContext";
import { DecrementContext } from "./context/DecrementContext";
dayjs.extend(customParseFormat);

const Clock = () => {
  const [clock, setClock] = useContext(ClockContext);
  const [decrement, setDecrement] = useContext(DecrementContext);

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date(time - decrement * 1000));
    }, 1000);

    return () => clearInterval(timer);
  });

  console.log(time);

  return (
    <Container>
      {clock ? (
        <>
          {" "}
          <h1>{time.toLocaleTimeString()}</h1>
          <Button onClick={() => setClock(false)}>Change Decrement</Button>
        </>
      ) : null}
    </Container>
  );
};

export default Clock;
