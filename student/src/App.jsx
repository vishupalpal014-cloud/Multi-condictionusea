import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Stu from "./student";

function App() {
  const collegename = [
    {
      name: "ABC",
      id: 1,
      Studentname: [
        {
          name: "Rahul",
          id: 1,
        },
        {
          name: "Rohan",
          id: 2,
        },
      ],
    },
    {
      name: "XYZ",
      id: 2,
      
    },
  ];
  return (
    <>
      {collegename.map((data, index) => {
        return (
          <div key={index}>
           
       <Stu para={data} />
          </div>
         
        );
         
      })}
    </>
  );
}

export default App;
