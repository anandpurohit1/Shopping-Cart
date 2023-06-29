import { useState } from "react"
function GetData(){

    const [data,setData] = useState(null)
    const [print,setPrint] = useState(false)

       function handleChange(e){
         console.log(e.target.value)
         setData(e.target.value)
         setPrint(false)
       }

 return(
   <>   
   
   <div className="container">
   <div className='print'> {
     print?
     <h1>{data}</h1>:
     null
   }
     </div> 
     <input type="text" placeholder="Data" onChange={handleChange}></input>
     <button onClick={()=>setPrint(true)}>Print Data</button>
   </div>
   </>

 )
}

export default GetData;