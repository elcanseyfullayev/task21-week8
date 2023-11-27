import './App.css'
import React, { useState } from 'react';


function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState(null);

  const add = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    setResult(num1 + num2);
  };

  const multiply = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    setResult(num1 * num2);
  }

  const substract = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    setResult(num1 - num2);
  };

  const divide = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    setResult(num1 / num2);
  };

  return (
    <div>
      <label>
        Number 1:
        <input type="text" onChange={(e) => setNumber1(e.target.value)} />
      </label>
      <label>
        Number 2:
        <input type="text" onChange={(e) => setNumber2(e.target.value)} />
      </label>

      <div>
        <button onClick={add}>Add</button>
        <button onClick={multiply}>Multiply</button>
        <button onClick={substract}>Substract</button>
        <button onClick={divide}>Divide</button>
      </div>

      {result !== null && <p>Result: {result}</p>}
    </div>
  );
};


export default App;
