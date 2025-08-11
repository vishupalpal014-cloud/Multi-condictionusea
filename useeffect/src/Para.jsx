import { useEffect, useState } from "react";

function Para({para,count}) {

 useEffect(()=>{
console.log("date");

 },[])
 useEffect(()=>{
console.log("setup");

 },[count])
 useEffect(()=>{
  return()=>{
 console.log("count");
  }
  },[]);

  return<>
  <h1>Count:{count}</h1>
  <h1>Para:{para}</h1>
  </>
}
export default Para;