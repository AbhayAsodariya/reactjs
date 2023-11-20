import React, { useState } from 'react'

function TaskList({todos,onChangeTodo,onDeleteTodo}) {
  return (
    <div>

        <ul style={{padding:0}}>
            {todos.map((t)=>{
               return(
                <li key={t.id} style={{listStyle:'none'}}>
                {/* {t.title} */}
                <Task
                    todo={t}
                    onChange={onChangeTodo}
                    onDelete={onDeleteTodo}
                />
                </li>
               )
            })}
        </ul>

       
      
    </div>
  )
}


function Task({todo,onChange,onDelete})
{
    const [edit,setEdit] = useState(false);
    let content;

    if(edit)
    {

       content = 

        <>
       

        
        <td width={100}>
        <input
        style={{background:'lightcoral', color:'white'}}
        type='text'
        value={todo.title}
        onChange={(e)=>{
            onChange({
                ...todo,
                title:e.target.value
            })

        }}
        />
        </td>
        <td>
        <button onClick={()=>{setEdit(false)}}>Save</button>
        </td>
       
        </>

    }

    else 
    {
        content = 
       <>
       
        <td width={100}>
       {todo.title}
       </td> 
       <td>
               <button onClick={()=>{setEdit(true)}}>Edit</button>
       </td>
       
       </>


    }


    return(
        <>
            <table border={1}>
            <tr>
            {content}
            <td>
            <button onClick={()=>{onDelete(todo.id)}}>Delete</button>
            </td>
            </tr>
            </table>
        </>
    )
}

export default TaskList