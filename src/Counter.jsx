import React from "react";
import { Link } from "react-router-dom";
import useCounter from "./hooks/useCounter";

const Counter = () => {
  const { count, increment, decrement, reset, localSetValue } = useCounter();

  return (
    <div className="App">
      <div className="counter-header">
        <Link className="linkHome" to="/">
          Home
        </Link>
        <p className="count-style">{count}</p>
      </div>
      <div className="button-flex">
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
      </div>
      <input
        className="input" type="number"
        placeholder="Enter a value"
        onChange={(e) => localSetValue(Number(e.target.value))}
      />
    </div>
  );
};

export default Counter;
