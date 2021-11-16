import React, { useState,useEffect } from 'react'
import { ListGroup,Button, ListGroupItem, Row, Col } from 'react-bootstrap';
import { CartState } from '../Context/Context'
import Rating from './Rating';

const Cart = () => {

    const { state : {cart} ,dispatch} =  CartState();

    const [total, setTotal] = useState();

    useEffect(() => {
        setTotal(cart.reduce((acc,curr) => acc + Number(curr.price) * curr.qty, 0))
    }, [cart]);

    return (
        <div className='home'>
            <div className='productContainer'>
                <ListGroup>
                    {
                        cart.map((prod) => (
                            <ListGroup.Item>
                                <Row>
                                    <Col md={5}>
                                        <span>{prod.name}</span>
                                    </Col>
                                    <Col md={3}>₹ {prod.price}</Col>
                                    <Col md={4}>
                                        <Rating rating={prod.ratings}/>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))
                    }
                </ListGroup>
            </div>
            <div className="filters summary">
                <span className="title">Subtotal ({cart.length}) items</span>
                <span style={{ fontWeight: 700, fontSize: 20 }}>Total: ₹ {total}</span>
                <Button type="button" disabled={cart.length === 0}>
                Proceed to Checkout
                </Button>
            </div>
        </div>
    )
}

export default Cart
