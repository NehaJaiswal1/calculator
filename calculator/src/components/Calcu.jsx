
import React, { useState } from 'react';


function Calcu() {

  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput(input + value)

  }

  const handleClear = () => {
    setResult('');
    setInput('')
  }

  const handlecalculate = () => {
    try {
      const calresult = eval(input);
      setResult(calresult)
    } catch (error) {
      setResult('Error')
    }

  }

  return (
    <div>
      <div>
        <input type='text' value={input} readOnly />
      </div>
      <div >
        <div>
          <button onClick={handleClear}>C</button>
          <button onClick={() => { handleClick('%') }}>%</button>
          <button onClick={() => { handleClick('(') }}>(</button>
          <button onClick={() => { handleClick(')') }}>)</button>
        </div>
        <div>
          <button onClick={() => { handleClick('7') }}>7</button>
          <button onClick={() => { handleClick('8') }}>8</button>

          <button onClick={() => { handleClick('9') }}>9</button>
          <button onClick={() => { handleClick('*') }}>*</button>
        </div>
        <div>
          <button onClick={() => { handleClick('4') }}>4</button>
          <button onClick={() => { handleClick('5') }}>5</button>
          <button onClick={() => { handleClick('6') }}>6</button>
          <button onClick={() => { handleClick('-') }}>-</button>
        </div>
        <div>
          <button onClick={() => { handleClick('1') }}>1</button>
          <button onClick={() => { handleClick('2') }}>2</button>
          <button onClick={() => { handleClick('3') }}>3</button>
          <button onClick={() => { handleClick('+') }}>+</button>
        </div>
        <button onClick={() => { handleClick('0') }}>0</button>
        <button onClick={() => { handleClick('.') }}>.</button>
        <button onClick={() => { handleClick(',') }}>,</button>
        <button onClick={() => { handlecalculate('=') }}>=</button>

      </div>
      <div>
        <p>Result: {result}</p>
      </div>
    </div>
  )
}

export default Calcu
