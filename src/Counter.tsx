"use client";  

import React, { useState } from 'react';

const Counter=() => {
  const [count, setCount] = useState<number>(0);  

  const  increment = () => {
    setCount(count + 1);
  };

  const  decrement = () => {
    setCount(count - 1);
  };

  const  reset = () => {
    setCount(0);  
  };

  return (
    <div style={{textAlign:'center', marginTop:'250px' ,marginBottom:'250px'}}>
      <h1>{count}</h1>
      <button onClick={ increment}>+</button>
      <button onClick={ reset}>Reset</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;