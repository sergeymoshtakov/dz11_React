import React, { useState } from 'react';
import CounterDisplay from './CounterDisplay';

function ClickCounter() {
  const [count, setCount] = useState(0);

  const buttons = [
    { label: '+1', incrementBy: 1 },
    { label: '+10', incrementBy: 10 },
    { label: '-100', incrementBy: -100 },
    { label: '+25', incrementBy: 25 },
  ];

  const incrementCount = (incrementBy) => {
    setCount(count + incrementBy);
  };

  return (
    <div>
      {buttons.map((button, index) => (
        <button key={index} onClick={() => incrementCount(button.incrementBy)}>
          {button.label}
        </button>
      ))}
      <CounterDisplay count={count} />
    </div>
  );
}

export default ClickCounter;