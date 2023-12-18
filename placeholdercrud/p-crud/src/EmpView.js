import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

function EmpView() {

    const [empdata,setEmpData] = useState("");

    const {empId}= useParams();
    // console.log(empId)

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos/"+empId)
        .then((res)=>{return res.json()})
        .then((data)=>{
            // console.log(data)
            // console.log(data.id)
            setEmpData(data)
        
        })
        .catch((e)=>{console.log(e.message)})
    })
  return (
    <div>
        <h4>Id : {empdata.id}</h4>
        <h4>UserId : {empdata.userId}</h4>
        <h4>Title : {empdata.title}</h4>
        <h4>Active User : {(empdata.active) ? "YES": "NO"}</h4>
    </div>
  )
}

export default EmpView
