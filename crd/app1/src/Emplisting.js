import React, { useEffect, useState } from 'react'
import { data } from './data'

function Emplisting() {
       const [user,setUser] = useState("")
//        useEffect(()=>{
//         fetch("./data.js")
//         .then((res)=>res.json)
//         .then((data)=>
//         console.log(data)
//         )
//        }
        
//        )
  return (
    <>
      <table>
        <thead>
                <tr>
                        <td>Id</td>
                        <td>name</td>
                        <td>city</td>
                        <td>phone</td>
                </tr>
        </thead>
        <tbody>
                {
                        data.map((item)=>(
                                <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.city}</td>
                                        <td>{item.phone}</td>
                                </tr>
                        ))
                }
        </tbody>
      </table>
    </>
  )
}

export default Emplisting
