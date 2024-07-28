import React from "react";
import loginImg from "../assets/3.png";
import "./Login.css";
import Button from "react-bootstrap/esm/Button";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';
import logo from '../assets/7.png'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({setUser}) => {

  var navigate = useNavigate()

  const [email, setEmail] = useState('')
  const handleChange = (e) =>{
    e.preventDefault()
    setEmail(e.target.value)
    // console.log(email)
  }

  return (
    <div>
      <div className="login-container">
        <div className="left">
          <p
            style={{ fontSize: "5rem", color: "white", fontFamily: "fantasy" }}>
            InstaCart!
          </p>
          <h1>Login</h1>
          <form>
            <input type="text" name="username" placeholder="Username" value={email} onChange={handleChange} />
            <input type="password" name="password" placeholder="password" />
            <Button className="btn btn-dark" style={{width:'10rem'}} 
            onClick={()=>{
              localStorage.setItem('userEmail', email)
              setUser(email)
              navigate('/')
            }}>Login</Button>
          </form>
          <p style={{color:'white', margin:'1rem'}}>Not a member? <a onClick={()=> navigate('/signup')} style={{color:'white', marginLeft:'.5rem'}}>Signup here</a></p>
        </div>
        <div className="right-half">
          <img src={loginImg} style={{ height: "30rem" }} alt="Login Image" />
        </div>
      </div>
    </div>
  );
};

export default Login;
