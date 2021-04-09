import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import Clock from "./clock";

const UserInput = () => {
  const [decrement, setDecrement] = useState(0);
  const [change, setChange] = useState(false);

  const handleChange = (event) => {
    setDecrement(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setChange(true);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Row>
          <Form.Label>Decrement:</Form.Label>
          <Form.Control
            className='DECREMENT_BY_SECS'
            type='number'
            value={decrement}
            onChange={handleChange}
            required
            min='0'
          />
        </Form.Row>
        <Button type='submit'>Back we go!</Button>
      </Form.Group>
      {change ? <Clock decrement={decrement} /> : null}
    </Form>
  );
};

export default UserInput;
