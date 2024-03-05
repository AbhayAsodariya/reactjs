import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { control, user } from './App';

const RegisterPage = () => {

const [username,setUsername]=useState("");
const [email,setEmail]=useState("")
const [password, setPassword]=useState("");
const [cpassword, setCpassword]=useState("");

const {setLoggedIn} = useContext(control);
const {setLoginUser} = useContext(user);

const [users, setUsers]=useState("");

const navigate = useNavigate()

useEffect(()=>{

  fetch("http://localhost:8000/userData")
  .then(res=>res.json())
  .then((data)=>{
    setUsers(data)
  })

},[])

const handleSubmit=(e)=>{

  e.preventDefault();

  const userData={username,email,password,cpassword}
  const checkemail = users.find((item)=>item.email == email);
  
  if(username && email && password && cpassword){

    if(!checkemail){

    if(password == cpassword){

      fetch("http://localhost:8000/userData",{
        method:"post",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(userData)
      })
      .then((res)=>{

        if(res){
          alert("Sign up Successfully")
          setLoggedIn(true);
          setLoginUser("Welcome "+ username);
          navigate("/")
        }

      })

    }else{
      alert("Plese Check Password And Confirm Password And Enter Both Same")
    }

  }else{
    alert("Your Email Already Exist...")
  }

}
}

  return (
        <>
        <div className="container mt-5">
        <h2>Register</h2>
        <form 
        onSubmit={handleSubmit}
        >
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username:
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={username}
              onChange={(e)=>{setUsername(e.target.value)}}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password:
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              value={cpassword}
              onChange={(e)=>{setCpassword(e.target.value)}}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
        <p>
        Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
      </>
  );
};

export default RegisterPage;
