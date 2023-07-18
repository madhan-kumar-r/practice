 import logo from './logo.svg';
 import './App.css';

 function App() {
  
   return (
     <div className="App">
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <p>
           Edit <code>src/App.js</code> and save to reload.
         </p>
         <a
           className="App-link"
           href="https://reactjs.org"
           target="_blank"
           rel="noopener noreferrer"
         >
           Learn React
         </a>

         <p>Learning React with React Docs</p>
       </header>
     </div>
   );
 }

// import React, { useReducer } from 'react';

// const initialState = { count: 0 };

// const reducer = (state, action) => {  
//   switch (action.type) {
//     case 'INCREMENT':
//       return { count: state.count + 1 };
//     case 'DECREMENT':
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// };

// const Counter = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       <p>Count: {state.count}</p>
//       <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
//       <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
//     </div>
//   );
// };


export default App;
