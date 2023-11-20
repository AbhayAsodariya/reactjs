import { useState } from "react";

function Object(){
        const [test,setData]=useState({
                name:"harsh",
                age:"22",
                address:{
                        city:{
                                area:"CG",
                                pin:380008
                        }
                }
        })
        const change=()=>{
                setData({
                        ...test,
                        address:{
                                ...test.address,
                                city:{
                                        ...test.address.city,
                                        pin:362020
                                }
                        }
                })
        }
        return(
                <>
                <button onClick={change}>change</button>
                        <h1>Pin:{test.address.city.pin}</h1>
                </>
        )
}
export default Object;