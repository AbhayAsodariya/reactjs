import React, { useEffect, useState } from 'react'

function EmpCreate() {
  const [users,setUsers] = useState();

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{return res.json()})
    .then((data)=>{setUsers(data)})
    .catch((err)=>{console.log(err.message)})
  })

  return (
    <div className='container'>
      <h1>User-List</h1>
      <button className='btn btn-info my-3'>Add-Users(+)</button>
      <table className='table'>
        <thead className='table-dark'>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {
            users && users.map((item)=>(
              <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>
              <button className='btn btn-success me-3'>Edit</button>
              <button className='btn btn-danger '>Delete</button>
            </td>
          </tr>
            ))
          }
          
        </tbody>
      </table>
    </div>
  )
}

export default EmpCreate
