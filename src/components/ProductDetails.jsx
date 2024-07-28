import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate    } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';



export default function ProductDetails({handleAddToCart, cartItems}) {
    const navigate = useNavigate()
  const location = useLocation();
  const { id,  price, images, title, description, category } = location.state;
    console.log(id)

    const [otherProducts, setOtherProducts] = useState([])

    useEffect(()=>{
        async function getData(){
            const response = await axios.get(`https://api.escuelajs.co/api/v1/categories/${category.id || 1}/products?limit=10&offset=0`);
            setOtherProducts(response.data)
        }
        getData()
        console.log(otherProducts)

    },[])
  return (
    <div className="container mt-4">
      <Row>
        <Col lg={2}>
          <div>
            {images.map((image, index) => (
              <img 
                key={index} 
                src={image} 
                width={120} 
                style={{ marginBottom: 20, borderRadius: 8 }} 
                alt={`Product thumbnail ${index}`}
              />
            ))}
          </div>
        </Col>
        <Col lg={5}>
          <img 
            src={images[0]} 
            width={300} 
            style={{ marginBottom: 20, borderRadius: 8 }} 
            alt="Product main"
          />
          <h5>{title}</h5>
          <h5 style={{color:'blue'}}>$ {price}</h5>
          <p style={{fontSize:'15px'}}>{description}</p>
          <Button style={{marginTop:'1rem', marginBottom:'2rem'}}
          onClick={()=>{
            if(id in cartItems){
                const currItem = cartItems[id];
                handleAddToCart({[id]:{title, price, quantity: currItem.quantity + 1}})
            }
            else{
                handleAddToCart({[id]:{title, price, quantity:1}})
            }
            // navigate('/cart')
          }}>Add to cart</Button>
        </Col>
        <Col lg={5}>
        <div style={{display:'flex', flexWrap:'wrap'}}>
        {
            otherProducts.map((product)=>{
                if(product.id == id) return ;
                return( <Card key={product.id} style={{width:'10rem', margin:'1rem', border:'none'}}>
                    <Card.Img src={product.images[0]}/>
                    <Card.Title>{product.title.split(' ')[0]}</Card.Title>
                    <Card.Text>$ {product.price}</Card.Text>
                    <Button style={{width:120}} onClick={()=>{ navigate(`/product/${product.id}`,{state:product})
                        
                    }}>View Item</Button>
                </Card> )
            })
        }
        </div> 
        </Col>
      </Row>
    </div>
  );
}
