import { useState } from "react";

function Check() {
  const[check,setcheck]=useState([])
  const handler=(event)=>{
console.log(event.target.value,event.target.checked);
if (event.target.checked){
setcheck([...check,event.target.value])
}else{
  setcheck([...check.filter((item)=>item!=event.target.value)])
}
  }
  return (
    <>

      <div style={{ display: "flex", flexDirection: "column", rowGap: "10px" }}>
        <div>
          <input onChange={handler} type="checkbox" id="php" />
          <label htmlFor="php">PHP</label>
        </div>
        <div>
          <input onChange={handler} type="checkbox" id="html" />
          <label htmlFor="html">HTML</label>
        </div>
        <div>
          <input  onChange={handler} type="checkbox" id="cpp" />
          <label htmlFor="cpp">C++</label>
        </div>
      </div>
      <h1>{check}</h1>
    </>
  );
}

export default Check;

