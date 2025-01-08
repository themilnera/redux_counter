import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {increment, decrement, incrementFive, decrementFive, resetCounter } from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <button onClick={()=>dispatch(incrementFive())}>+5</button>
      <button onClick={()=>dispatch(decrementFive())}>-5</button>
      <button onClick={()=>dispatch(resetCounter())}>Reset</button>
      {isLogged ? <h3>isLogged</h3> : ''}
    </div>
  );
}

export default App;
