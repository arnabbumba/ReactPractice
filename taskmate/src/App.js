//Application to increase the counter value by 1 while clicking ADD button ,
//decrease the counter value by 1 while clicking SUB button and 
//reset the counter value to 0 while clicking RESET button
import { useState } from 'react';
import './App.css';


function App() {
  //let count = 0;
  const [count,setCount] = useState(0);

  function handleAdd(){
    setCount(count + 1);
  }

 // function handleSub(){
  //  setCount(count - 1);
 // }

  function handleReset(){
    setCount(0);
  }
  return (
    <div className="App">
      <div className='box'>
        <p>{count}</p>
         <button onClick={handleAdd} className='add'>ADD</button>
         <button onClick={() => setCount(count-1)} className='sub'>SUB</button>
         <button onClick={handleReset} className='reset'>RESET</button>
      </div>
    </div>
  );
}

export default App;
