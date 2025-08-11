import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useRef } from "react";
import Uncontroll from "../../usereff/src/uncontroll";
function App() {
  const inputreff = useRef(null);
  const h1ref = useRef(null);
  const use=useRef(null)
  const handler = () => {
    console.log(inputreff);

    inputreff.current.focus();
    inputreff.current.placeholder = "password";
    inputreff.current.value = "1233";

    inputreff.current.style.color = "red";
  };
  const hand = () => {
    if (inputreff.current.style.display != "none") {
      inputreff.current.style.display = "none";
    } else {
      inputreff.current.style.display = "block";
    }
  };

  const hoop = () => {
    h1ref.current.style.color = "green";
  };
  const hoo = () => {
    use.current.style.color = "blue";
    };

  return (
    <>
      <button onClick={hand}>hide</button>
      <h1>usereff</h1>
      <input ref={inputreff} type="text" placeholder="Enter your name" />
      <button onClick={handler}>click</button>
      <h2 ref={h1ref}>code step by step</h2>
      <button onClick={hoop}>oncolor</button>
      <p ref={use}>where is the code</p>
      <button onClick={hoo}>set</button>
          <Uncontroll/>
    </>
  );
}

export default App;
