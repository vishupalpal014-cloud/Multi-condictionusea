import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState({
    border: "1px solid #cccccc3b",
    width: "350px",
    boxShadow: "1px 2px 3px 0px #cccccc57",
    margin: "10px",
  });
  const update =(bgColor, textColor) => {
   setCount({...count,backgroundColor:bgColor})
   setTextColor(textColor)
  };
  const [textColor,setTextColor] = useState("red")

  return (
    <>
      <button onClick={() => update("gray", "green")}>click</button>
      <button onClick={() => update("white", "black")}>cli</button>
      <div style={count}>
        <div className="pic">
          <img
            src="https://as1.ftcdn.net/v2/jpg/12/26/38/54/1000_F_1226385429_NFkuEHz6IwCEZY6kPCMlUHoDg3CMwVPu.jpg"
            alt=""
          />
          <h2 style={{color:textColor}}>name:</h2>
        </div>
      </div>
  
    </>
  );
}

export default App;
