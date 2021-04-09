import { render, screen } from "@testing-library/react";
import React from "react";
// import ReactDOM from "react-dom";

import UserInput from "../components/UserInput";

test("user input is rendered", () => {
  //   const root = document.createElement("div");
  render(<UserInput />);

  //   console.log(screen.getByLabelText("Decrement:", { selector: "input" }));
  expect(
    screen.getByLabelText("Decrement:", { selector: "input" })
  ).toHaveValue(0);
});
