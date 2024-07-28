import React from 'react';
import loginImg from '../assets/2.png'
import './Login.css'
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SignUp = ({setUser}) => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const handleChange = (e) =>{
    e.preventDefault()
    setEmail(e.target.value)
    // console.log(email)
  }
  
  return (
    <div className="login-container">
      <div className="left">
        <p style={{fontSize:'5rem', color:'white', fontFamily:'fantasy'}}>InstaCart!</p>
        <h1 >Sign Up</h1>
        <form>
          <input type="text" name="username" placeholder='Username' value={email} onChange={handleChange} />
          <input type="password" name="password" placeholder='password' />
          <Button style={{width:'10rem'}} className="btn btn-dark" 
          onClick={()=>{
            localStorage.setItem('userEmail', email)
            setUser(email)
            navigate('/')
          }}>Sign in  </Button>
        </form>
        <p style={{color:'white', margin:'1rem'}}> Already a member ?  <a onClick={()=> navigate('/login')} style={{color:'#FAFAFA', marginLeft:'.5rem'}}>Signup here</a></p>

      </div>
      <div className="right-half">
        <img src={loginImg} style={{height:'35rem'}} alt="Login Image" />
      </div>
    </div>
  );
};

export default SignUp;