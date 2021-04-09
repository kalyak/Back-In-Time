import React, { createContext, useState } from "react";

export const ClockContext = createContext();

export const ClockProvider = (props) => {
  const [clock, setClock] = useState(false);

  return (
    <ClockContext.Provider value={[clock, setClock]}>
      {props.children}
    </ClockContext.Provider>
  );
};
