import { useState } from "react";

function Statte(){
        const [state,setData]=useState(0);
        const up = (v)=>{
                setData(state+1);
        }
        return(
                <>
                        <p>{state}</p>
                        {/* <input type="text" value={state}/> */}
                        <button onClick={up}>update</button>
                </>
        )
}

export default Statte;