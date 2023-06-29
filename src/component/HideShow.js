import { useState } from "react";


function HideShow(){

   const [data,setData] = useState(true)

    return(
        <>
        {
            data? <h1>Hello World</h1> : null
        }
        
        <button onClick={()=>setData(false)}>Hide</button>
        <button onClick={()=>setData(true)}>Show</button>
        <button onClick={()=>setData(!data)}>Toggle</button>
        </>
    )
}
export default HideShow;