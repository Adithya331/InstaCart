import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from 'react-router-dom';

export default function Products() {

    const [products, setProducts] = useState([])

    useEffect(()=>{
        async function getProducts(){
            const response = await axios.get("https://api.escuelajs.co/api/v1/products?offset=0&limit=20");
            setProducts(response.data)
        }
        getProducts()
    },[])

    const navigate = useNavigate()
  return (
    <div style={{padding:'2rem'}}>
        <h3>Select Products</h3>
        <div style={{display:'flex', flexWrap:'wrap'}}>
        
        {
            products.map((product)=>{
                return( <Card key={product.id} style={{width:'18rem', margin:'1rem', border:'none'}}>
                    <Card.Img src={product.images[0]}/>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>$ {product.price}</Card.Text>
                    <Button style={{width:120}} onClick={()=>{ navigate(`/product/${product.id}`,{state:product})
                        
                    }}>View Item</Button>
                </Card> )
            })
        }
        </div>
        
    </div>
  )
}
