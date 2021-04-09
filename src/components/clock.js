import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

const Clock = ({ decrement }) => {
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
      <h1>{time.toLocaleTimeString()}</h1>
    </Container>
  );
};

export default Clock;
