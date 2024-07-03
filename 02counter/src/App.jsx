//in this project we will use hooks for ui updation which provided by react itself

//if there is a condition : 0<value<20


// useState is a Hook that lets you add React state to function components. 
//import { useState } from "react";
// const App = () => {
//   const [name, setName] = useState('')
// };
//state can hold any datatype like strings, numbers, booleans, arrays, objects, objects in arrays, arrays in objects.

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(10)

  // let counter= 10

  const incValue = () =>{
    // counter++
    if(counter<20){
    setCounter(counter+1)}
  }

  const decValue = () =>{
    // counter--
    if(counter>0){
    setCounter(counter-1)}

  }

  return (
    <>
      <h1>Hello from jhanviii</h1>
      <h2> Counter value : {counter} </h2>

      <button onClick={incValue} >INCREASE VALUE</button>
      <button onClick={decValue} >DECREASE VALUE</button>

      
    </>
  )
}

export default App
