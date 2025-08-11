import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Mul } from "./Mul_coundction";
import Name from "./components/file1";
import Good from "./name";
import Raper from "./raper";
import Get from "./input";
import Check from "./ckeckbox";
import Drop from "./dropdwon";

function App() {
  let userObject = {
    name: "vishu",
    age: "22",
    class: "mca",
  };
  let userObject2 = {
    name: "vishu",
    age: "22",
    class: "mca",
  };
  let arr = ["du", "mii", "mreeut", "goa"];
  // let balu = null;

  return (
    <>
      <Drop />
      <Check />
      <Raper color="orange">
        <h1>hello guys!</h1>
      </Raper>
      <Raper>
        <h1>hello guys!</h1>
      </Raper>
      <Mul />
      <Get />
      <Name user={userObject} collagename={arr} />
      <Good name={"aarohi"} />
      <Good name={"aarohi"} />

      {/* {balu.name} */}
      {/* <Name user={userObject2}/>
          <Name collagename={arr}/> */}
    </>
  );
}

export default App;
