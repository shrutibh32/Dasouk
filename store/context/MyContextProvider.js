"use client"
import React, { useReducer } from "react";
import MyContext from "./MyContext";

const defaultValue = { isDashboardOpen: false };

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLEDASHBOARD":
      return { isDashboardOpen: !action.isDashboardOpen };
    default:
      return state;
  }
};

const MyContextProvider = (props) => {
  const [{ isDashboardOpen }, dispatch] = useReducer(reducer, defaultValue);

  const toggleDashboard = () => {
    dispatch({ isDashboardOpen, type: "TOGGLEDASHBOARD" });
  };

  const context = {
    isDashboardOpen: isDashboardOpen,
    toggleDashboard: toggleDashboard,
  };

  return (
    <MyContext.Provider value={context}>{props.children}</MyContext.Provider>
  );
};

export default MyContextProvider;
