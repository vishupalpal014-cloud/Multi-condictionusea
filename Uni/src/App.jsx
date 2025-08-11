import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Mul from './mul';
import { SubjectContext } from './add';

function App() {
  const [count, setCount] = useState("english");

  return (
    <>
      <div style={{ background: "yellow", padding: 10 }}>
        <SubjectContext.Provider value={count}>
          <select value={count}onChange={(event) => setCount(event.target.value)}>
            <option value="">Select</option>
            <option value="math">Math</option>
            <option value="hindi">Hindi</option>
            <option value="english">English</option>
          </select>
<button onClick={()=>setCount("")}>click</button>
          <h1>hiii!</h1>
          <Mul />
        </SubjectContext.Provider>
      </div>
    </>
  );
}

export default App;
