import React, { useState } from 'react';
import CounterDisplay from './CounterDisplay';

function ClickCounter() {
  const [count, setCount] = useState(0);

  const incrementCount = (incrementBy) => {
    setCount(count + incrementBy);
  };

  return (
    <div>
      <button onClick={() => incrementCount(1)}>+1</button>
      <button onClick={() => incrementCount(10)}>+10</button>
      <button onClick={() => incrementCount(-100)}>-100</button>
      <button onClick={() => incrementCount(25)}>+25</button>
      <CounterDisplay count={count} />
    </div>
  );
}

export default ClickCounter;
