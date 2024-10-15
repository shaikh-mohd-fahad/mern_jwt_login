import React, { useContext, useState } from 'react'
import Navbar from './include/Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Login() {
  const { login } = useContext(AuthContext); 
    const navigate = useNavigate();
    const [formInput,setFormInput]=useState({
        email:"",
        password:"",
    })
    const handleFormIinput=(e)=>{
        const {name,value}=e.target;
        setFormInput({
            ...formInput,
            [name]:value
        })
    }
    const handleloginForm=async(e)=>{
        e.preventDefault();
        // console.log("form INput",formInput)
            try {
                const login2=await axios.post("http://localhost:3000/login",formInput)
                // console.log("login",login2.data.message)
                if (login2.data.success) {
                  login(login2.data.token);
                    navigate('/profile');  // Redirect to dashboard
                  } else {
                    alert(login2.data.message);  // Show error message
                  }
            } catch (error) {
                console.log("error",error)
            }
    }
  return (
    <>
    <Navbar/>
<div className="container m-5">
<h1 className='text-center text-3xl font-bold'>Login</h1>
<form action="" onSubmit={handleloginForm}>
<label className="input input-bordered flex items-center gap-2">
  Email: 
  <input type="text" name="email" onChange={handleFormIinput} value={formInput.email} className="grow" placeholder="Email" />
</label>
<label className="input input-bordered flex items-center gap-2">
  Password:
  <input type="password" name="password" onChange={handleFormIinput} className="grow" value={formInput.password} />
</label>
<button className='btn' type='submit'>Login</button>
</form>
</div>
    </>
  )
}

export default Login
