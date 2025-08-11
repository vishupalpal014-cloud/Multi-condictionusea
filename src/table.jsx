import Clock from "./clock";
import { useState } from "react";
function Table({ para }) {
  const [color, setcolor] = useState("green");
  const handel = (e) => {
    setcolor(e.target.value);
  };
  return (
    <>
      <div>
        <input type="datetime-local" name="clock" id="she" />
      </div>
      <div style={{ border: "1px solid black", borderRadius: "40px" }}>
        <h3>
          name:<span style={{ color: "red" }}>{para.name}</span>
        </h3>
        <h3>
          age:<span style={{ color: "blue" }}>{para.age}</span>
        </h3>
        <h3>
          gender:
          <span style={{ color: "green" }}>{para.gender}</span>
        </h3>
        <h3>city:{para.city}</h3>
        <select value={color} onChange={handel}>
          <option value={"red"}> red</option>
          <option value={"green"}>green</option>
          <option value={"yellow"}>yellow</option>
        </select>
        <Clock color={color} />
      </div>
    </>
  );
}
export default Table;
