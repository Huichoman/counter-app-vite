import React from "react";
import "./App.css";
import { FirstApp } from "./FirstApp";
import { CounterApp } from "./CounterApp";

export const App = () => {
  return <CounterApp value={10} />;
};
