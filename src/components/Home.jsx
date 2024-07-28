import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CarousalOne from "../assets/1.png";
import CarousalTwo from "../assets/4.png";
import CarousalThree from "../assets/5.png";
import "./Home.css"
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

function Home(props) {

  const navigate = useNavigate()

  const handleClick=()=>{
    console.log('clicked')
    navigate('/items')
  }
  return (
    <div>
      <Carousel className="home-carousal" style={{ height: "80vh" }}>
      <Carousel.Item>
        <div className="content">
          <div className="left">
            <h1>SHOP WITH UTMOST</h1>
            <h1>STYLE</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, nisi
              expedita aut nam dicta commodi officia quasi fugiat eos ratione.
            </p>
            <div>
            <Button onClick={()=>{
              if(props.user){
                navigate('products')
              }
              else{
                navigate('login')
              }
              
            }}>Browse Details</Button>
            </div>
            
            <p>products are available from</p>
          </div>
          <div className="right">
            <img src={CarousalTwo}></img>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="content">
          <div className="left">
            <h1>SHOP WITH UTMOST</h1>
            <h1>STYLE</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, nisi
              expedita aut nam dicta commodi officia quasi fugiat eos ratione.
            </p>
            <div>
            <Button onClick={()=>{
              if(props.user){
                navigate('products')
              }
              else{
                navigate('login')
              }
              
            }}>Browse Details</Button>
            </div>
            
            <p>products are available from</p>
          </div>
          <div className="right">
            <img src={CarousalOne}></img>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="content">
          <div className="left">
            <h1>SHOP WITH UTMOST</h1>
            <h1>STYLE</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, nisi
              expedita aut nam dicta commodi officia quasi fugiat eos ratione.
            </p>
            <div>
            <Button onClick={()=>{
              if(props.user){
                navigate('products')
              }
              else{
                navigate('login')
              }
              
            }}>Browse Details</Button>
            </div>
            
            <p>products are available from</p>
          </div>
          <div className="right">
            <img src={CarousalThree}></img>
          </div>
        </div>
      </Carousel.Item>
      
    </Carousel>
    </div>
    
  );
}

export default Home;
