import { useState } from "react";

function Name({collagename, user, name}){
  // console.log(name);
  const [val,setval]=useState("vishu")
  return (
    <>
    <hr />
    <h4>{val&&val}</h4>
    <button onClick={()=>setval("nishu")}>onclick</button>
    <h1>{user.name}</h1>
        <h1>{user.age}</h1>
    {<h2>{collagename[0]}</h2>}
    <h1>hi {name}</h1>


    </>
  );
}

export default Name
