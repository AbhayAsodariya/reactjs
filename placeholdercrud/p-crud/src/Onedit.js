import React, { useState } from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

function Onedit({name, email, id, onEdit, onDelete}) {
        // const [name,setName]=useState("");
        // const [email,setEmail]=useState("");
        const [isEdit, setIsEdit] = useState(false);

        const handleEdit = () => {
                setIsEdit(!isEdit);
        };

        const handleDelete = () => {
                onDelete(id);
        };

        const handleOnEditSubmit = (e) => {
                e.preventDefault();
                onEdit(id,  e.target.name.value, e.target.email.value);
                setIsEdit(!isEdit);
        };
  return (
        <div>
        {isEdit ? (
          <form onSubmit={handleOnEditSubmit}>
            <input placeholder="Name" name="name" value={name}/>
            <input placeholder="Email" name="email" value={email}/>
            
            <button onSubmit={handleOnEditSubmit}>Save</button>
            <button onClick={handleDelete}>Delete</button>
          </form>
        ) : (
        <tr className='user'>
            <td>{name}</td>
            <td>{email}</td>
            <td>
              <button onClick={handleEdit}>Edit</button>
              <button onClick={handleDelete}>Delete</button>
            </td>
        </tr>
        )}
      </div>
  )
}

export default Onedit
