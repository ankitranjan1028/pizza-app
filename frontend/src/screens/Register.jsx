// import React,{useState} from 'react'
// import {Form, Button, Container} from 'react-bootstrap'
// import {useSelector, useDispatch} from 'react-redux'
// import {registerUser} from '../actions/userAction'
// import Loader from '../components/Loader';
// import Error from '../components/Error';
// import Success from '../components/Success';


// const Register = () => {
//   const [name,setName] = useState('')
//   const [email,setEmail] = useState('')
//   const [password,setPassword] = useState('')
//   const [confirmPassword,setConfirmPassword] = useState('')

//   const registerState = useSelector(state =>  state.registerUserReducer)
//   const {error, success, loading} = registerState

//   const dispatch = useDispatch()

//   const registerhandler = ()=>{
//     if(password!==confirmPassword){
//       alert('Password do not match')
//     }
//     else{
//       const user= {name, email, password, confirmPassword}
//       dispatch(registerUser(user)); 
//     }
//   }
//   return (
//     <>
//     <Container>
//       {loading && <Loader/>}
//       {success && <Success success="User Register Successfully😁"/>}
//       {error && <Error error="Somwthing went wrong🥲"/>}
//      <Form>
//       <h1>Registration</h1>
//       <Form.Group className="mb-3" controlId="formBasicName">
//         <Form.Label>Name</Form.Label>
//         <Form.Control 
//         type="text" 
//         placeholder="Enter name" 
//         value={name}
//         onChange={e=>setName(e.target.value)}
//         />
       
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control 
//         type="email" 
//         placeholder="Enter email" 
//         value={email}
//         onChange={e=>setEmail(e.target.value)}
//         />
//         <Form.Text className="text-muted">
//           We'll never share your email with anyone else.
//         </Form.Text>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control 
//         type="password" 
//         placeholder="Password" 
//         value={password}
//         onChange={e=>setPassword(e.target.value)}
//         />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
//         <Form.Label>Confirm Password</Form.Label>
//         <Form.Control 
//         type="password" 
//         placeholder="Confirm Password" 
//         value={confirmPassword}
//         onChange={e=>setConfirmPassword(e.target.value)}
//         />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicCheckbox">
//         <Form.Check type="checkbox" label="Check me out" />
//       </Form.Group>
//       <Button variant="primary" 
//       onClick={registerhandler}>
//         Register
//       </Button>
//     </Form>
//     </Container>
//     </>
//   );
// };

// export default Register


import React, { useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { registerUser } from '../actions/userAction';
import Loader from '../components/Loader';
import Error from '../components/Error';
import Success from '../components/Success';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const registerState = useSelector((state) => state.registerUserReducer);
  const { error, success, loading } = registerState;

  const dispatch = useDispatch();

  const registerHandler = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
    } else {
      const user = { name, email, password };
      dispatch(registerUser(user));
    }
  };

  return (
    <>
      <Container className=" d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <Card style={{ width: '30rem', padding: '2rem' }}>
          <Card.Body>
            {loading && <Loader />}
            {success && <Success success="User Registered Successfully😁" />}
            {error && <Error error="Something went wrong🥲" />}
            <Form>
              <h1 className="text-center">Registration</h1>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" onClick={registerHandler}>
                Register
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Register;
