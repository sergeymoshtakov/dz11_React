import React, { useState } from 'react';
import CounterRCC from './CounterRCC';
import Form1 from './Form1'

function Less4() {
    const [obj, setObj] = useState({
        name: ''
    });
  return (
    <div className='container'>
        <h1>Less 4</h1>
        <CounterRCC/>
        <br/>
        <Form1/>
    </div>
  );
}

export default Less4;