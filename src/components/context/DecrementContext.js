import React, { createContext, useState } from "react";

export const DecrementContext = createContext();

export const DecrementProvider = (props) => {
  const [decrement, setDecrement] = useState(0);

  return (
    <DecrementContext.Provider value={[decrement, setDecrement]}>
      {props.children}
    </DecrementContext.Provider>
  );
};
