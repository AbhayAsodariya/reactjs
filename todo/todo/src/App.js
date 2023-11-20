import React, { useState } from 'react'
import AddToDo from './AddTodo';
import TaskList from './TaskList';
import Useref from './Useref';
import Hooks from './Hooks';
// import UseEffectHook from './UseEffectHook';
// import UseEffectHook1 from './UseEffectHook1';
let nextId=1;
const intialtodos = [
  
];
function App() {

  const [todos,setTodos] = useState(intialtodos);

  const handleAddTodo = (title)=>
  {
    setTodos([
      ...todos,
      {
        id:nextId++,
        title:title
      }

    ])
  }

  

  const handleChangeTodo = (nextTodo)=>
  {
   setTodos(
    todos.map((t)=>{

      if(t.id == nextTodo.id)
      {
        return nextTodo;
      }
      else 
      {
        return t;
      }

    })
   )
    
  }



  const handleDeleteTodo = (todoId)=>
  {
    setTodos(
      todos.filter((t)=>{
        return(t.id !== todoId)
      })
    )
  }


  return (
    <div>

      <AddToDo onAddToDo={handleAddTodo}/>
      <TaskList
       todos={todos}
       onChangeTodo={handleChangeTodo}
       onDeleteTodo={handleDeleteTodo}
      />
      <Useref/>
      <Hooks/>
      <button onClick={()=>{alert(nextId++)}}>Click</button>

      {/* <UseEffectHook/> */}
   
      
    </div>
  )
}

export default App