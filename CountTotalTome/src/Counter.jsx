// src/Counter.js
// import React, { useState, useRef, useEffect } from 'react';

// const Counter = () => {
//   const [count, setCount] = useState(0);
//   const [incrementCount, setIncrementCount] = useState(0);
//   const [decrementCount, setDecrementCount] = useState(0);
//   const renderCount = useRef(0);

//   useEffect(() => {
//     renderCount.current += 1;
//   });

//   const handleIncrement = () => {
//     setCount(count + 1);
//     setIncrementCount(incrementCount + 1);
//   };

//   const handleDecrement = () => {
//     setCount(count - 1);
//     setDecrementCount(decrementCount + 1);
//   };

//   return (
//     <div>
//       <h1>Counter: {count}</h1>
//       <button onClick={handleIncrement}>Increment</button>
//       <button onClick={handleDecrement}>Decrement</button>
//       <div>
//         <p>Increments: {incrementCount}</p>
//         <p>Decrements: {decrementCount}</p>
//         <p>Total Renders: {renderCount.current}</p>
//       </div>
//     </div>
//   );
// };

// export default Counter;


import React, {useReducer, useEffect, useRef} from 'react'

const initialState = {
    count: 0,
    incrementCount: 0,
    decrementCount: 0,
}

const reducers = (state, action) => {
    switch(action.type) {
        case 'increment':
            return {
                ...state,
                count: state.count + 1, 
                incrementCount: state.incrementCount + 1,
            };
            case 'decrement':
            return {
                ...state,
                count: state.count - 1, 
                decrementCount: state.decrementCount + 1,
            };
            case 'reset':
            return {
                initialState
            }
            default:
                return state;

    }
}
const Counter = () => {

    const [state, dispatch] = useReducer(reducers, initialState);
    const renderCount = useRef();
  return (
    <div>
      <h1>Counter : {state.count}</h1>
      <button onClick={() => dispatch({type: 'decrement'})}>Increment</button>
      <button onClick={() => dispatch({type: 'increment'})}>Decrement</button>
      <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
      <div>
        <p>Increments: {state.incrementCount}</p>
        <p>Decrements: {state.decrementCount}</p>
        <p>Total Render: {renderCount.current}</p>
      </div>
    </div>
  )
}

export default Counter
