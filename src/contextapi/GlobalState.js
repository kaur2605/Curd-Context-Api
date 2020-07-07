import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initalstate = {
  users: [
    {
      id: 1,
      name: "Gurdeep",
    },
    {
      id: 2,
      name: "Sandeep",
    },
    {
      id: 3,
      name: "Mandeep",
    },
  ],
};

// create context

export const GlobalContext = createContext(initalstate);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initalstate);

  //actions
  const removeUser = (id) =>
    dispatch({
      type: "removeUser",
      payload: id,
    });

  const addUser = (user) =>
    dispatch({
      type: "addUser",
      payload: user,
    });

  const editUser = (user) =>
    dispatch({
      type: "editUser",
      payload: user,
    });

  return (
    <GlobalContext.Provider
      value={{
        users: state.users,
        removeUser,
        addUser,
        editUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
