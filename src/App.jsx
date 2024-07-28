import React from "react";
import "./App.css";
import Home from "./components/Home";
import {Routes, Route } from "react-router-dom";
import Login from "./components/Login";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logo from './assets/7.png'
import { useNavigate } from "react-router-dom";
import SignUp from "./components/SignUp";
import { useState } from "react";
import { useEffect } from "react";
import ProductDetails from "./components/ProductDetails";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { Badge } from "react-bootstrap";
import Checkout from "./components/Checkout";

function App() {

  const navigate = useNavigate()

  const [user, setUser] = useState('') 
  const [cartItems, setCartItems] = useState({})

  useEffect(()=>{
    var userEmail = localStorage.getItem('userEmail')
    if(userEmail){
      setUser(userEmail)
    }

  },[])

  const handleAddToCart =(item)=>{
    setCartItems({...cartItems, ...item})
  }

  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand
            style={{ display: "flex", alignItems: "center", gap: "1rem", cursor:'pointer' }}
            onClick={()=> navigate('/')}
          >
            <img src={logo} width={"50px"} height={"50px"}></img>
            <h2 >InstaCart</h2>
          </Navbar.Brand>

          <Navbar.Toggle />

          <Navbar.Collapse className="justify-content-end">
            <Button onClick={()=>{
              if(!user){
                navigate('/login')
              }
              else{
                localStorage.clear()
                setUser('')
                navigate('/login')
              }
            }} style={{marginRight:20}}>{user ? 'Log out' : 'Log in'}</Button> 
            {user && <Button onClick={()=> navigate('/cart')}>Cart<Badge>{Object.keys(cartItems).length > 0 && Object.keys(cartItems).length}</Badge></Button>}
          </Navbar.Collapse>
        </Container>
      </Navbar>
        <div>
          <Routes>
            <Route path="/" element={<Home user={user}/>} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/signup" element={<SignUp setUser={setUser} />} />
            <Route path="/products" element={<Products  />} />
            <Route path="/product/:id" element={<ProductDetails handleAddToCart={handleAddToCart} cartItems={cartItems}/>}  /> 
            <Route path="/cart" element={<Cart cartItems={cartItems}/>}  /> 
            <Route path="/checkout" element={<Checkout/>}  /> 
          </Routes>
        </div>
    </div>
  );
}

export default App;
