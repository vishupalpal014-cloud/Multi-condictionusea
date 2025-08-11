import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Pro from "./pro";

function App() {
  const [count, setCount] = useState(0);
  const [val, setval] = useState(0);

  function name() {
    console.log("hello");
  }
  function change() {
console.log("hii",val); 

  }
  
  useEffect(() => {
   
   change()
  }, [val]);
  return (
    <>
{/*     
      <button onClick={() => setCount(count + 1)}>click{count}</button>
      <button onClick={() => setval(val + 1)}>click{val}</button>
      */}
      <Pro/>
    </>
  );
}

export default App;
