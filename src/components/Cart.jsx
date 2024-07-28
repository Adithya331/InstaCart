import React from 'react'
import {Table, Row, Col, Button} from 'react-bootstrap'
import CartImage from '../assets/6.png'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Cart({cartItems}) {
    console.log(cartItems)
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalQuantity, setTotalQyaltity] = useState(0)
    const navigate = useNavigate()
    useEffect(()=>{
        let tempPrice = 0
        let tempQuantity = 0
        Object.keys(cartItems).map((cartItemId)=>{
            const details = cartItems[cartItemId]
            tempQuantity += details.quantity     
            tempPrice += details.quantity * details.price    
        })
        setTotalPrice(tempPrice)
        console.log("hi "+tempPrice)
        setTotalQyaltity(tempQuantity)
    },[])
  return (
    <div style={{margin:40}}>
        <h3>Your Cart</h3>
        <Row >
            <Col>
                <div style={{margin: 40}}>
                <Table > 
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(cartItems).map((cartItemId)=>{
                            const itemDetails = cartItems[cartItemId]
                            return(
                                <tr>
                                    <td>{itemDetails.title}</td>
                                    <td>{itemDetails.quantity}</td>
                                    <td>{itemDetails.quantity * itemDetails.price}</td>
                                </tr>
                            )
                        })}
                        <tr>
                            <td>Total</td>
                            <td>{totalQuantity}</td>
                            <td>{totalPrice}</td>
                        </tr>
                    </tbody>

                </Table>
                <Button onClick={()=>{
                    navigate('/checkout')
                }}>CheckOut</Button>
                </div>
            </Col>

            <Col>
            <img src={CartImage} height={500}></img></Col>
        </Row>
      
      
    </div>
  )
}
