import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, deleteFromCart } from '../actions/cartAction'
import { FaMinusCircle, FaPlusCircle, FaTrash } from 'react-icons/fa'
import Checkout from '../components/Checkout';

const CartScreen = () => {
    const cartState = useSelector((state) => state?.cartReducer);
    const cartItems = cartState?.cartItems;
    const dispatch = useDispatch()
    console.log("cartItems",cartItems);
    const subTotal = cartItems.reduce((x, item) => x + item.price, 0)
    return (
        <>
            <Container>
                <Row>
                    <Col md={6}>
                        <h1>My Cart</h1>
                        <Row>
                            {cartItems.map((item,index) => (
                                <>
                                    <Col md={7} key={index}>
                                        <h6>
                                            {item.name} [{item.varient}]

                                        </h6>
                                        <h6>Price: ₹({item.quantity}x{item.prices[0][item.varient]}) = ₹{""}
                                            {item.price}
                                        </h6>
                                        <h6>
                                            Quantity:&nbsp;
                                            <FaMinusCircle
                                                className='text-danger'
                                                style={{ cursor: "pointer" }}
                                                onClick={() => {
                                                    dispatch(
                                                        addToCart(item, item.quantity - 1, item.varient)
                                                    );
                                                }}
                                            /> {"  "}
                                            &nbsp;
                                            {item.quantity} &nbsp;
                                            <FaPlusCircle
                                                className='text-success'
                                                style={{ cursor: "pointer" }}
                                                onClick={() => {
                                                    dispatch(
                                                        addToCart(item, item.quantity + 1, item.varient)
                                                    );
                                                }}
                                            />

                                        </h6>
                                    </Col>
                                    <Col md={5}>
                                        <img src={item.image} alt="" style={{ width: '80px', height: '80px' }} />
                                        <FaTrash
                                            className='text-danger'
                                            style={{ cursor: "pointer", marginLeft: "10px" }}
                                            onClick={() => {
                                                dispatch(
                                                    deleteFromCart(item)
                                                );
                                            }} />
                                    </Col>
                                    <hr />

                                </>
                            ))}
                        </Row>
                    </Col>
                    <Col md={4}>
                        <h1>Payment Info</h1>
                        <h4>Sub Total:- </h4>
                        <h4>₹{subTotal}/-</h4>
                        <Checkout subTotal={subTotal} />
                    </Col>

                </Row>
            </Container>
        </>
    );
};

export default CartScreen;

