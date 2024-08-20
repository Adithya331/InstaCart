import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CarousalOne from "../assets/1.png";
import CarousalTwo from "../assets/4.png";
import CarousalThree from "../assets/5.png";
import "./Home.css"
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

import company1 from '../assets/10.png'
import company2 from "../assets/11.png"
import company3 from "../assets/12.png"
import company4 from "../assets/13.png"
import company5 from "../assets/14.png"
import company6 from "../assets/15.png"

function Home(props) {

  const navigate = useNavigate()

  const handleClick = () => {
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
                Discover the hottest fashion trends and elevate your style with our curated collection.
              </p>
              <div>
                <Button onClick={() => {
                  if (props.user) {
                    navigate('products')
                  }
                  else {
                    navigate('login')
                  }

                }}>Browse Details</Button>
              </div>

              <p>products are available from:</p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <img src={ company1 } style={{ height: '3rem', width: '3rem' }}></img>
                  <img src={ company2 } style={{ height: '3rem', width: '3rem' }}></img>
                  <img src={ company3 } style={{ height: '3rem', width: '3rem' }}></img>
                  <img src={ company4 } style={{ height: '3rem', width: '3rem' }}></img>
                  <img src={ company5 } style={{ height: '3rem', width: '3rem' }}></img>
                  <img src={ company6 } style={{ height: '3rem', width: '3rem' }}></img>
                </div>
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
                Explore our collection featuring the latest fashion trends.
              </p>
              <div>
                <Button onClick={() => {
                  if (props.user) {
                    navigate('products')
                  }
                  else {
                    navigate('login')
                  }

                }}>Browse Details</Button>
              </div>

              <p>products are available from:</p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                  <img src={ company1 } style={{ height: '3rem', width: '3rem' }}></img>
                  <img src={ company2 } style={{ height: '3rem', width: '3rem' }}></img>
                  <img src={ company3 } style={{ height: '3rem', width: '3rem' }}></img>
                  <img src={ company4 } style={{ height: '3rem', width: '3rem' }}></img>
                  <img src={ company5 } style={{ height: '3rem', width: '3rem' }}></img>
                  <img src={ company6 } style={{ height: '3rem', width: '3rem' }}></img>
                </div>
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
                Discover the hottest fashion trends and elevate your style with our curated collection.
              </p>
              <div>
                <Button onClick={() => {
                  if (props.user) {
                    navigate('products')
                  }
                  else {
                    navigate('login')
                  }

                }}>Browse Details</Button>
              </div>

              <p>products are available from:</p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                  <img src={ company1 } style={{ height: '3rem', width: '3rem' }}></img>
                  <img src={ company2 } style={{ height: '3rem', width: '3rem' }}></img>
                  <img src={ company3 } style={{ height: '3rem', width: '3rem' }}></img>
                  <img src={ company4 } style={{ height: '3rem', width: '3rem' }}></img>
                  <img src={ company5 } style={{ height: '3rem', width: '3rem' }}></img>
                  <img src={ company6 } style={{ height: '3rem', width: '3rem' }}></img>
                </div>

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
