import { useId, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mul from './mul'
import { SubjectContext } from './add'

function App() {
 const [count, setCount] = useState("english")

  return (
    <>
    <div style={{background:"yellow",padding:10}}>
      <button onClick={() => setCount("english")}   >english</button>
      <SubjectContext.Provider value={count}>
        <select><option value="more valuse">Select</option>
        <option value="math">math</option>
         <option value="hindi">hindi</option>
          <option value="">english</option></select>    <h1>hiii! </h1>
    <Mul/>
 </SubjectContext.Provider>
</div>
 </>
  )
}

export default App
