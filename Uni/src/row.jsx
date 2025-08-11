// Row.jsx
import { useContext } from "react";
import { SubjectContext } from "./add";

function Row() {
  const sum = useContext(SubjectContext);

  return (
    <div style={{ background: "pink", padding: 10 }}>
      <h1>guyyyy!</h1>
      <h1>{sum}</h1>
    </div>
  );
}

export default Row
