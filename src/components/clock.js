import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

const Clock = ({ decrement }) => {
  const [time, setTime] = useState(new Date());
  //   console.log(dayjs(time), "HH:mm:ss");
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date(time - decrement * 1000));
      //   console.log(time);
    }, 1000);
  });

  return (
    <Container>
      <h1>{time.toLocaleTimeString()}</h1>
    </Container>
  );
};

export default Clock;
