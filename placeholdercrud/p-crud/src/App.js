import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import AddUsers from './AddUsers';
import Onedit from './Onedit';

function App() {

  const [users,setusers] = useState([]);
  let id=1;
  useEffect(()=>{

    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>{return res.json()})
    .then((data)=>{
      setusers(data)
    })

  },[])

  const testdata = (name,email)=>{

    fetch('https://jsonplaceholder.typicode.com/users',{
      method:"post",
      headers:{"content-type":"application/json"},
      body:JSON.stringify({
        name:name,
        email:email
      })
    })
    .then((res)=>{return res.json()})
    .then((data)=>{
      setusers( users=>[...users,{
        id:users.length+1,
        name:name,
        email:email
      }])
      console.log(data.id);
    })
  }


const onEdit=(id,name,email)=>{
          fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
            method:"PUT",
            headers:{"content-type":"application/json"},
            body:JSON.stringify({
              name:name,
              email:email
          })
          })
          .then((res)=>{
            if (res.status !== 200) {
              return;
            } else {
              return res.json();
            }
          })
          .then((data)=>{
            const updatedUsers = users.map((item) => {
              if (item.id === id) {
                item.name = name;
                item.email = email;
              }
    
              return item;
            });
    
            setusers((users) => updatedUsers);
          })
          .catch((error) => console.log(error));
}


  const onDelete =(id)=>{
    console.log(id)

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
      method:"delete",
      headers:{"content-type":"application/json"},
    
    })
    .then((res)=>{
      if(res)
      {
        alert("are you sure??")
      }
    })
    .then((data)=>{
      setusers(users.filter((user)=>(
        user.id !== id
      )))
    })

  }

  return (
    <div className="App">

    <AddUsers onadd={testdata}/>

      <table border={1} cellSpacing={2}>
        <thead style={{background:"#000",color:"#fff"}}>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Actions</td>
          </tr>
        </thead>

        <tbody>
        {users && 
      users.map((item)=>(
        <tr>
          <td>{item.id}</td>
        <Onedit
          id={item.id}
          key={item.id}
          name={item.name}
          email={item.email}
          onEdit={onEdit}
          onDelete={()=>{onDelete(item.id)}}
        />
        </tr>
      ))}
       
        </tbody>
      </table>
    
    </div>
  );
}

export default App;
