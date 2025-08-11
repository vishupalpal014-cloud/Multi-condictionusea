import { useState } from "react";

function Get(params) {
  const [val, setval] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  return (
    <>
      <input
        type="text"
        value={val}
        onChange={(event) => setval(event.target.value)}
        placeholder="enter any number"
      />
      <input
        type="password"
        value={password}
        onChange={(event) => setpassword(event.target.value)}
        placeholder="enter any password"
      />
      <input
        type="text"
        value={email}
        onChange={(event) => setemail(event.target.value)}
        placeholder="enter any emai"
      />
    <button >sumit</button>
    <button onClick={()=>{setemail(""),setpassword(""),setval("")}}>clear</button>
      <div>{val}</div>
      <div>{password}</div>
      <div>{email}</div>
   
    </>
  );
}
export default Get;