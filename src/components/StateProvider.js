import React, { createContext, useContext, useReducer } from "react";

// Prepare the context
export const StateContext = createContext();

// wrap our app provide context
export const StateProvider = ({ reducer, intialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, intialState)}>
    {children}
  </StateContext.Provider>
);

// Pull Information from context
export const useStateValue = () => useContext(StateContext);
