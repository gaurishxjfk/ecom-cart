import React from 'react'
import { Card , Button } from 'react-bootstrap'
import { CartState } from '../Context/Context'
import Rating from './Rating'
import './styles.css'

const SingleProduct = ({prod}) => {

    const {state : { cart } , dispatch } = CartState();

    const addCart = (prod) => {
        dispatch({
            type: "ADD_TO_CART",
            payload : prod
        })
    }

    const removeCart = (prod) => {
        dispatch({
            type: "REMOVE_FROM_CART",
            payload : prod
        })
    }

    return (
        <div className="products">
            <Card>
                <Card.Img variant="top" src={prod.image} alt={prod.name} />
                <Card.Body>
                    <Card.Title>{prod.name}</Card.Title>
                        <Card.Subtitle style={{ paddingBottom: 10 }}>
                            <span>₹ {prod.price.split(".")[0]}</span>
                                    {prod.fastDelivery ? (
                                        <div>Fast Delivery</div>
                                    ) : (
                                        <div>4 days delivery</div>
                                    )}
                                    <Rating rating={prod.ratings} />
                        </Card.Subtitle>
                            {cart.some((p) => p.id === prod.id) ? (
                                <Button
                                    onClick={() => removeCart(prod)}
                                    variant="danger"                    
                                >
                                Remove from Cart
                                </Button>
                                ) : (
                                <Button
                                    onClick={() => addCart(prod)}
                                    disabled={!prod.inStock}
                                >
                                {!prod.inStock ? "Out of Stock" : "Add to Cart"}
                                </Button>
                            )}
                </Card.Body>
            </Card>
        </div>
    )
}

export default SingleProduct
