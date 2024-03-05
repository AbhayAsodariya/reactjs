import React, { createContext, useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { control, user } from './App';

const LoginPage = () => {
        
        const [email,setEmail]=useState("");
        const [password,setPassword]=useState("");
        const navigate= useNavigate()
        
        const {setLoggedIn} = useContext(control);
        const {setLoginUser} = useContext(user);
        
        const handleSubmit=(e)=>{
                e.preventDefault();
                fetch("http://localhost:8000/userData")
                .then(res=>res.json())
                .then((data)=>{
                        const foundUser = data.find((item) => item.email === email && item.password === password);
                        
                        if (foundUser) {
                                setLoggedIn(true);
                                data.filter((item)=>{
                                        if(item.email === email){
                                                setLoginUser("Welcome "+ item.username);
                                        }
                                })
                                navigate("/");
                        } else {
                                alert("Invalid email or password");
                        }
                        
                })
        }
        

  return (
        

        <>
        <div className='container'>
        <h2 className=''>Login</h2>
        <form 
              onSubmit={handleSubmit}
        >
                <div className="mb-3">
                <label htmlFor="username" className="form-label">
                Email:
                </label>
                <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                      value={email}
                      onChange={(e)=>{setEmail(e.target.value)}}
                
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
                
                />
                </div>
                <button type="submit" className="btn btn-primary">
                Login
                </button>
        </form>
        <p>
                Don't have an account? <Link to="/register">Register</Link>
        </p>
        </div>
    </>
  );
};

export default LoginPage;


