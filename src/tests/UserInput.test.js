import { render, screen } from "@testing-library/react";
import React from "react";
import { ClockContext } from "../components/context/ClockContext";
import { DecrementContext } from "../components/context/DecrementContext";
// import ReactDOM from "react-dom";

import UserInput from "../components/UserInput";

const customRender = (ui, { decrementProps, clockProps, ...renderOptions }) => {
  return render(
    <DecrementContext.Provider {...decrementProps}>
      <ClockContext.Provider {...clockProps}>{ui}</ClockContext.Provider>
    </DecrementContext.Provider>,
    renderOptions
  );
};

test("user input is rendered", () => {
  //   const root = document.createElement("div");
  const decrementProps = {
    decrement: 5,
  };
  const clockProps = {
    clock: false,
  };
  customRender(<UserInput />, { decrementProps, clockProps });

  expect(
    screen.getByLabelText("Decrement:", { selector: "input" })
  ).toHaveValue(4);
});
