import { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { ClockContext } from "./context/ClockContext";
import { DecrementContext } from "./context/DecrementContext";

const UserInput = () => {
  const [clock, setClock] = useContext(ClockContext);
  const [decrement, setDecrement] = useContext(DecrementContext);

  const handleChange = (event) => {
    setDecrement(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setClock(true);
  };

  return (
    <Container className='mt-5'>
      {clock ? null : (
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Row>
              <Form.Label htmlFor='DECREMENT_BY_SECS'>Decrement:</Form.Label>
              <Form.Control
                id='DECREMENT_BY_SECS'
                type='number'
                value={decrement}
                onChange={handleChange}
                required
                min='0'
              />
            </Form.Row>
            <Button type='submit'>Back we go!</Button>
          </Form.Group>
        </Form>
      )}
    </Container>
  );
};

export default UserInput;
