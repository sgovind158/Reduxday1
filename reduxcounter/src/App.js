
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

import { add, sub ,userAdd } from './store/action';
import { useState } from 'react';

function App() {
  const [input,setInput] = useState(0)
  
  const dispatch = useDispatch()
  const count = useSelector((state)=>state.count)
  const userInput = useSelector((state)=>state.userInput)
  return (
    <div className="App">
      <h1>user input</h1>
      <input type="number" placeholder='enter any number' value={input} onChange={(e)=>setInput(e.target.value)} /> 
       <div></div>
      <button  onClick={ ()=>dispatch({type: "ADITION",payload:input}) }>ADDITION</button>

      <button  onClick={ ()=>dispatch({type: "SUBTRATION",payload:input}) }>SUBTRATION</button>

      <button  onClick={ ()=>dispatch({type: "MULTIPICATION",payload:input}) }>MULTIPICATION</button>
       
      <button  onClick={ ()=>dispatch({type: "DIVISION",payload:input}) }>DIVISION</button>

      <button  onClick={ ()=>dispatch({type: "CLEAR",payload:input}) }>CLEAR</button>

      <h1>counter : {count}</h1>
      <div>
        <button onClick={()=>dispatch(sub())}>-</button>
        <button onClick={()=>dispatch(add())}  >+</button>
      </div>
     

    </div>
  );
}

export default App;
