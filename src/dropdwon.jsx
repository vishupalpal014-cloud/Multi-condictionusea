import { useState } from "react";
import Table from "./table";
function Drop(params) {
  const [drop, setdrop] = useState("male");
  const [city, setcity] = useState("delhi");
  const arr = [
    {
      name: "John",
      age: 30,
      city: "delhi",
      gender: "male",
    },
    {
      name: "Emma",
      age: 25,
      city: "mumbai",
      gender: "female",
    },
    {
      name: "Oliver",
      age: 35,
      city: "delhi",
      gender: "male",
    },
    {
      name: "Ava",
      age: 28,
      city: "mumbai",
      gender: "female",
    },
  ];

  return (
    <>
      {" "}
      <h1>Select male or female</h1>
      <input
        onChange={(event) => setdrop(event.target.value)}
        type="checkbox"
        name="male"
        value={"male"}
        checked={drop == "male"}
        id="golf"
      />
      <label htmlFor="">male</label>
      <input
        onChange={(event) => setdrop(event.target.value)}
        type="checkbox"
        name="famale"
        value={"female"}
        checked={drop == "female"}
        id="golf"
      />
      <label htmlFor="">female</label>
      <h1>select gender:{drop}</h1>
      <br />
      <br />
      <h3>select city</h3>
      <select
        onChange={(event) => setcity(event.target.value)}
        defaultValue={"gbu"}
      >
        <option value="delhi">delhi</option>
        <option value="gurugram">gurugram</option>
        <option value="titron">titron</option>
        <option value="gbu">gbu</option>
      </select>
      <h3>{city}</h3>
      {arr.map((user, index) =>(
        <div key={index}>
          <Table para={user}/></div>
 ) )}
    </>
  );
}
export default Drop;
