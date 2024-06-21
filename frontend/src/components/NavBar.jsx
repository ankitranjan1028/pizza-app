// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import {Navbar,Container, Nav, Image,NavDropdown} from 'react-bootstrap'
// import {LinkContainer} from 'react-router-bootstrap'
// import {logoutUser} from '../actions/userAction';


// const NavBar = () => {
//   const dispatch = useDispatch()
//   const cartState = useSelector(state=>state.cartReducer);
//   const userState = useSelector(state => state.loginUserReducer);
//   const {currentUser} = userState
//   return (
//     <div>
//     <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
//       <Container>
//         <Navbar.Brand>
//             < Image src="images/logo.png" style={{height:'50px'}}/>
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="ms-auto">
//             {
//               currentUser?(<LinkContainer to="/">
//               {/* <Nav.Link>{currentUser.name}</Nav.Link> */}
//                <NavDropdown title={currentUser.name}>
//                <LinkContainer to="/orders">
//                <NavDropdown.Item>Order</NavDropdown.Item>
//         </LinkContainer>
//         <NavDropdown.Item 
//         onClick={()=> {dispatch(logoutUser())}}>
//           Logout</NavDropdown.Item>
//       </NavDropdown>
//               </LinkContainer>): (
//               <>
//               {" "}
//               <LinkContainer to="/login">
//         <Nav.Link>Login</Nav.Link>
//         </LinkContainer>
//         <LinkContainer to="/register">
//         <Nav.Link>Register</Nav.Link>
//         </LinkContainer></>)
//             }
        
//         <LinkContainer to="/cart">
//         <Nav.Link>Cart
//            {cartState.cartItems.length}</Nav.Link>
//         </LinkContainer>
            
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>

//     </div>
//   );
// };

// export default NavBar;

import React from 'react';
// import './Pizza.css'
import '../App.css'
import { useDispatch, useSelector } from 'react-redux';
import { Navbar, Container, Nav, Image, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { logoutUser } from '../actions/userAction';


const NavBar = () => {
  const dispatch = useDispatch();
  const cartState = useSelector(state => state.cartReducer);
  const userState = useSelector(state => state.loginUserReducer);
  const { currentUser } = userState;

  return (
    <div className='is-sticky'>
      <Navbar collapseOnSelect expand="lg" bg="dark"  variant="dark" style={{ padding: '1rem 0',background: 'linear-gradient(to right, #2b5876, #4e4376)' }}>
        <Container>
          <Navbar.Brand>
            <Image src="images/logo.png" style={{ height: '50px' }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" style={{ fontSize: '1.2rem' }}>
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              {currentUser ? (
                <NavDropdown title={currentUser.name} id="collasible-nav-dropdown">
                  <LinkContainer to="/orders">
                    <NavDropdown.Item>Order</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={() => { dispatch(logoutUser()) }}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <>
                  <LinkContainer to="/login">
                    <Nav.Link>Login</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/register">
                    <Nav.Link>Register</Nav.Link>
                  </LinkContainer>
                </>
              )}
              <LinkContainer to="/cart">
                <Nav.Link>Cart ({cartState.cartItems.length})</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
