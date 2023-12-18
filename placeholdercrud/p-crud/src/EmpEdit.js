import React, { useState,useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function EmpEdit() {

    const [id,idChnage] = useState("")
    const [userId,userIdChange]  = useState("")
    const [title,titleChange] = useState("")
    // const [,phoneChange] = useState("")
    const [completed,completedChange] = useState(false)

    const navigate = useNavigate();
    const {empId} = useParams();

    // const [empdata,setEmpdata] =  useState("")

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos/"+empId)
        .then((res)=>{return res.json()})
        .then((data)=>{
            // console.log(data)
            // console.log(data.id)
            // setEmpData(data)
            idChnage(data.id)
            userIdChange(data.userId)
            titleChange(data.title)
            // phoneChange(data.phone)
        
        })
        .catch((e)=>{console.log(e.message)})
    },[])

    const handleClick = (e)=>{

        e.preventDefault();

        console.log({id,userId,title,completed})

       const empData = {id,userId,title,completed}


        // console.log(e)

        fetch("https://jsonplaceholder.typicode.com/todos/"+empId,{
            method:"PUT",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(empData)
        })
        .then((res)=>{
            // console.log(res.json())
            // return res.json();

            if(res)
            {
                alert("updated Successfully..!");
                navigate('/')

            }


        })
       
    
        
    }
  return (
    <div className="container text-center m-5">
    <div className="row d-flex justify-content-center">
      <div className="card">
          <div className="card-title">
              <h3>Edit Employee</h3>
          </div>

      </div>
      <div className="col-lg-6">
        <div className="card-body">
          <form onSubmit={handleClick} className="container text-start m-3">

            <div className="col-12">
              <label className="form-label">Id</label>
              <input value={id} disabled="disabled" className="form-control"></input>
            </div>

            <div className="col-12">
              <label className="form-label">UserId</label>
              <input type="number" value={userId} onChange={(e)=>{userIdChange(e.target.value)}} className="form-control"></input>
            </div>

             <div className="col-12">
              <label className="form-label">Title</label>
              <input value={title} onChange={(e)=>{titleChange(e.target.value)}} className="form-control"></input>
            </div>

             {/* <div className="col-12">
              <label className="form-label">Phone</label>
              <input value={phone} onChange={(e)=>{phoneChange(e.target.value)}} className="form-control"></input>
            </div> */}

             <div className="col-12 mt-2">
              
              <input value={completed} onChange={(e)=>{completedChange(e.target.checked)}} type="checkbox" className="form-check-input"></input>{" "}
              <label className="form-label">Is active</label>
            </div>

             <div className="col-12">
            
              <button type="submit" className="btn btn-success me-3">Save</button>
              <Link to="/" className="btn btn-info">Back</Link>

            </div>

                    



          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default EmpEdit