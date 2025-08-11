import Para from "./Para";
import { useState, useEffect } from "react";

function Pro() {
  const math = () => {
    console.log("golf");
  };
    const handleCount = () => {
   console.log("north");
   
  };
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
    const [disply,setdisply]=useState(true)
  useEffect(() => {
    // console.log("Component mounted");
    math();
    
  }, []);
  useEffect(() => {
    // console.log("Component updated");
 handleCount()
  },[] );

 
  return (
    <>
      <button onClick={() => setCount(count + 1)}>btn{count}</button>
      <button onClick={() => setCount2(count2 + 1)}>num{count2}</button>
       <button onClick={() => setdisply(!disply)}>cli{disply}</button>{
        disply?<Para/>:null
       }
      <Para count={count} para={count2} />
    </>
  );
}
export default Pro;
