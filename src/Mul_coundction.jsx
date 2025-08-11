import { useState } from "react";

export function Mul() {
  const [val, setval] = useState(0);
  // const [aam, setaam] = useState(10);
  return (
    <>
      <button onClick={() => setval(val + 1)}>click</button>
      {/* <button onClick={() => setaam(aam)}>click</button> */}
      {/* <h1>{val}</h1> */}

      {val == 1 ? (
        <h1>hello</h1>
      ) : val == 2 ? (
        <h1>hiii!</h1>
      ) : val == 3 ? (
        <h1>!</h1>
      ) : (
        <h1>other</h1>
      )}

      {/* <h1>counter</h1> */}
      <h1> USE MULTICOUNCTION</h1>
    </>
  );
}
