
function Coll({num}){
  return <>
 {num.Studentname &&
          num.Studentname.map((val,index) => (
            <div style={{padding:"5px",marginLeft:"60px",background:"pink"}} key={index}>
             <ul><li>
                <h4>Student Name: {val.name}</h4>
              </li>
              <li>
                <h4>Student id: {val.id}</h4>
              </li>
              </ul> 
            </div>
            
          ))}
  </>
}
export default Coll;