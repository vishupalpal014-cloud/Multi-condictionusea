 import Show from "./show";
 function Uncontroll(){
  const display=(name)=>{
  alert(name)
    
  }
  const show=()=>{
    alert("get the function call all")
  };

  return <>

  <Show dis={display} name="Hello" show={show}/>
   <Show dis={display} name="World" show={show} />
    <Show dis={display} name="Uncontrollable" show={show} />
     <Show dis={display} name="Function" show={show}/>
</>
}
export default Uncontroll;