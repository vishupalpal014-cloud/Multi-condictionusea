import Coll from "./coll";
function Stu({ para }) {
  console.log(para);

  return (
    <div style={{background:"pink",border:"1px solid black",borderBottom:"5px", borderRadius:"50px"}}>
      <ul>
        <li>
          <h1>College Name: {para.name} </h1>
        </li>
        <li>
          <h1>College id: {para.id}</h1>
        </li>
       
           </ul>
     <Coll num={para}/>
    </div>

  );
}
export default Stu;
