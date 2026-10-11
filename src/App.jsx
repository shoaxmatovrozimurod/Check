import React, { useState } from 'react'
import './App.css'
function App() {
  const [count, setCount ] = useState(0)

  return (
    <>
    <h1> {count} </h1>
    <button onClick={()=> setCount(count + 1)}>inc</button>
    <button onClick={()=> setCount(count -1)}>dec</button>
    <button onClick={()=> setCount(0)}>res</button>
    
    </>

  )
}


export default App