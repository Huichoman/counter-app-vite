import PropTypes from "prop-types";
import { useState } from "react";

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleOnAdd = () => {
    setCounter(counter + 1);
  };

  const handleOnSubstract = () => {
    setCounter(counter - 1);
  };

  const handleOnReset = () => {
    setCounter(value);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={handleOnAdd}>+1</button>
      <button onClick={handleOnSubstract}>-1</button>
      <button onClick={handleOnReset}>Reset</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
