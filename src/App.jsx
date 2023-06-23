import { useState } from 'react'
import './App.css'

function myButton(){

  let [count, setCount] = useState();
  function handleClick(){
    setCount(count++);
    console.log("Clicked");
  }
  return(
    <button onClick = {handleClick}>
      Clicked {count} times
    </button>
  )
}

function Square(){
  const [value, setValue ] = useState(null);
  function handleClick(){
    alert('clicked');
    setValue('X')
  }
  return (
    <button className="square" onClick={handleCluck}>{value}</button>
  );
}

function App() {

  return (
    <div className='app'>
      <div className='board-row'>
        <Square value='1'/>
        <Square value='3'/>
        <Square value='2'/>
      </div>
      
      <div className='board-row'>
        <Square value='4'/>
        <Square value='5'/>
        <Square value='6'/>
      </div>

      <div className='board-row'>
        <Square value='7'/>
        <Square value='8'/>
        <Square value='9'/>
      </div>

    </div>
  )
}

export default App