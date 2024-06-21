
// import React,{useState} from 'react'

// import{useDispatch} from 'react-redux';
// import { addToCart } from '../actions/cartAction';
// import {Card, Button, Row, Col, Modal, Container} from 'react-bootstrap'

// const Pizza = ({pizza}) => {
//   const [varient, setVarient] = useState('small')
//   const [quantity, setQuantity] = useState(1)
  
//   const [show, setShow] = useState(false);

//   const dispatch = useDispatch()

//   const addToCartHandler=()=>{
//     dispatch(addToCart(pizza, quantity, varient));
//   };

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   return (
//     <div className='col-12  col-md-4 py-2 px-3'>
//       <Container className='col-12 flex-wrap' >
//         <Card style={{ width: '18rem',margin:'13px',padding:"10px" , boxShadow: "0px 0px 16px 5px rgba(107,106,107,1)" }}>
//       <Card.Img 
//       variant="top" 
//       src={pizza.image} 
//       style={{height:'250px', cursor:'pointer',objectFit:"cover"}}
//       onClick={handleShow}

//       />
//       <Card.Body>
//         <Card.Title>{pizza.name}</Card.Title>
//         <hr />
//         <Card.Text>
//           <Row>
//             <Col md={6}>
//               <h6>Varients</h6>
//               <select 
//               value={varient}  onChange={(e)=>setVarient(e.target.value)}>
//                 {pizza.varients.map(varient => (
//                   <option key={varient}> {varient}</option>
//                 ))}
//               </select>
//             </Col>
//             <Col md={6}>
//               <h6>Quantity</h6>
//               <select value={quantity} onChange={(e)=>setQuantity(e.target.value)}>
//                {[...Array(10).keys()].map((v,i)=>(
//                 <option key={i+1} value={i+1} >{i+1}</option>
//                )
//                 )}
//               </select>
//             </Col>
//           </Row>
//         </Card.Text>
//         {/* <Button variant="primary">Go somewhere</Button> */}
//         <Row>
//           <Col md={6}> Price: ₹{pizza.prices[0][varient]*quantity}
//           </Col>
//           <Col md={6}>
//             <Button 
//             onClick={addToCartHandler}
//             className='bg-warning text-white'>Add to cart</Button>
//           </Col>
//         </Row>
//       </Card.Body>
//     </Card>
//     <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>{pizza.name}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <div>
//           <Card.Img variant="top" 
//         src={pizza.image} 
//         style={{height:'250px'}}/>
//           </div>
//           <div>
//             <h5>Description: </h5>
//             <h6>{pizza.description}</h6>
//           </div>
          
//           </Modal.Body>
        
//       </Modal>
//       </Container>
//     </div>
//   )
// }

// export default Pizza



import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/cartAction';
import { Card, Button, Row, Col, Modal, Toast, Container } from 'react-bootstrap';
import '../App.css';

const Pizza = ({ pizza }) => {
  const [varient, setVarient] = useState('small');
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartReducer.cartItems);

  const addToCartHandler = () => {
    const existingItem = cartItems.find(
      (item) => item._id === pizza._id && item.varient === varient
    );
    if (!existingItem) {
      dispatch(addToCart(pizza, quantity, varient));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container className="position-relative">
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={3000}
          autohide
          style={{
            position: 'absolute',
            top: '200px',
            right: '10px',
            backgroundColor: 'green',
            color: 'white',
            zIndex: 1000,
          }}
        >
          <Toast.Body>Added to cart successfully!</Toast.Body>
        </Toast>
        <Card className="card-container">
          <Card.Img
            variant="top"
            src={pizza.image}
            className="card-image"
            onClick={handleShow}
          />
          <Card.Body>
            <Card.Title>{pizza.name}</Card.Title>
            <hr />
            <Card.Text>
              <Row>
                <Col md={6}>
                  <h6>Variants</h6>
                  <select
                    value={varient}
                    onChange={(e) => setVarient(e.target.value)}
                  >
                    {pizza.varients.map((varient) => (
                      <option key={varient}>{varient}</option>
                    ))}
                  </select>
                </Col>
                <Col md={6}>
                  <h6>Quantity</h6>
                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  >
                    {[...Array(10).keys()].map((v, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </Col>
              </Row>
            </Card.Text>
            <Row>
              <Col md={6}>
                Price: ₹{pizza.prices[0][varient] * quantity}
              </Col>
              <Col md={6}>
                <Button
                  onClick={addToCartHandler}
                  className="bg-warning text-white"
                >
                  Add to cart
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Card.Img
              variant="top"
              src={pizza.image}
              style={{ height: '250px' }}
            />
          </div>
          <div>
            <h5>Description: </h5>
            <h6>{pizza.description}</h6>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Pizza;
