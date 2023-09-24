
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
      <div className='h-screen flex items-center justify-center '>
        <div className='items-center bg-zinc-600 w-64 h-84 justify-center p-3 rounded-lg shadow-lg shadow-yellow-950'>
        <div>
          <input className="p-6 rounded-lg bg-gray-200 shadow-lg shadow-yellow-950" type='text' value={input} readOnly />
        </div>
        <div className='mt-5 '>
          <div className='flex space-x-4'>
            <button className='bg-yellow-600 rounded-full w-20 h-8 p-2  flex items-center justify-center font-bold  shadow-lg shadow-yellow-950' onClick={handleClear}>C</button>
            <button className='bg-yellow-600 rounded-full w-20 h-8 p-2  flex items-center justify-center font-bold shadow-lg shadow-yellow-950 ' onClick={() => { handleClick('%') }}>%</button>
            <button className='bg-yellow-600 rounded-full w-20 h-8 p-2  flex items-center justify-center font-bold shadow-lg shadow-yellow-950' onClick={() => { handleClick('(') }}>(</button>
            <button className='bg-yellow-600 rounded-full w-20 h-8 p-2  flex items-center justify-center font-bold shadow-lg shadow-yellow-950 '
            onClick={() => { handleClick(')') }}>)</button>
          </div>
          <div className='flex space-x-4 mt-2'>
            <button className='bg-yellow-600 rounded-full w-20 h-8 p-2  flex items-center justify-center font-bold shadow-lg shadow-yellow-950' onClick={() => { handleClick('7') }}>7</button>
            <button className='bg-yellow-600 rounded-full w-20 h-8 p-2  flex items-center justify-center font-bold shadow-lg shadow-yellow-950'onClick={() => { handleClick('8') }}>8</button>

            <button className='bg-yellow-600 rounded-full w-20 h-8 p-2  flex items-center justify-center font-bold shadow-lg shadow-yellow-950'onClick={() => { handleClick('9') }}>9</button>
            <button className='bg-yellow-600 rounded-full w-20 h-8 p-2  flex items-center justify-center font-bold shadow-lg shadow-yellow-950'onClick={() => { handleClick('*') }}>*</button>
          </div>
          <div className='flex space-x-4 mt-2'>
            <button className='bg-yellow-600 rounded-full w-20 h-8 p-2  flex items-center justify-center font-bold shadow-lg shadow-yellow-950'onClick={() => { handleClick('4') }}>4</button>
            <button className='bg-yellow-600 rounded-full w-20 h-8 p-2  flex items-center justify-center font-bold shadow-lg shadow-yellow-950' onClick={() => { handleClick('5') }}>5</button>
            <button className='bg-yellow-600 rounded-full w-20 h-8 p-2  flex items-center justify-center font-bold shadow-lg shadow-yellow-950 'onClick={() => { handleClick('6') }}>6</button>
            <button className='bg-yellow-600 rounded-full w-20 h-8 p-2  flex items-center justify-center font-bold shadow-lg shadow-yellow-950 ' onClick={() => { handleClick('-') }}>-</button>
          </div>
          <div className='flex space-x-4 mt-2'>
            <button className='bg-yellow-600 rounded-full w-20 h-8 p-2  flex items-center justify-center font-bold shadow-lg shadow-yellow-950'onClick={() => { handleClick('1') }}>1</button>
            <button className='bg-yellow-600 rounded-full w-20 h-8 p-2  flex items-center justify-center font-bold shadow-lg shadow-yellow-950'onClick={() => { handleClick('2') }}>2</button>
            <button className='bg-yellow-600 rounded-full w-20 h-8 p-2  flex items-center justify-center font-bold shadow-lg shadow-yellow-950 ' onClick={() => { handleClick('3') }}>3</button>
            <button className='bg-yellow-600 rounded-full w-20 h-8 p-2  flex items-center justify-center font-bold shadow-lg shadow-yellow-950'onClick={() => { handleClick('+') }}>+</button>
          </div>
          <div className='flex space-x-4 mt-2'>
          <button className='bg-yellow-600 rounded-full w-20 h-8 p-2  flex items-center justify-center font-bold shadow-lg shadow-yellow-950 ' onClick={() => { handleClick('0') }}>0</button>
          <button className='bg-yellow-600 rounded-full w-20 h-8 p-2  flex items-center justify-center font-bold shadow-lg shadow-yellow-950 'onClick={() => { handleClick('.') }}>.</button>
          <button className='bg-yellow-600 rounded-full w-20 h-8 p-2  flex items-center justify-center font-bold shadow-lg shadow-yellow-950 ' onClick={() => { handleClick(',') }}>,</button>
          <button className='bg-yellow-600 rounded-full w-20 h-8 p-2  flex items-center justify-center font-bold shadow-lg shadow-yellow-950 ' onClick={() => { handlecalculate('=') }}>=</button>
          </div>

        </div>
        <div className='flex space-x-4 mt-2 shadow-lg shadow-yellow-950 rounded-lg '>
          <p>Result: {result}</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Calcu
