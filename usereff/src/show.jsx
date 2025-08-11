function Show({dis,name,show}) {
 
return <><div><button onClick={()=>dis(name)}>display name</button>
 
 <button onClick={()=>show(name)}>get name</button></div>
</>
}
export default Show