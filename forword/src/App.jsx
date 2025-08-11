import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from 'react'
import Forword from './forword'
function App() {
 const user=useRef(null)
  
 const use=()=>{
  user.current.value="name"
  user.current.style.color="red"
  user.current.focus();

 }

  return (
    <>
   <Forword pro={user}/>
    <button onClick={use}>click</button>
    </>
  )
}

export default App
