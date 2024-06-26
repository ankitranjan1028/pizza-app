// import React, { useState, useEffect } from "react";
// import { Container, Form, Button } from "react-bootstrap";
// import { useDispatch } from "react-redux";
// import { loginUser } from "../actions/userAction";
// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (localStorage.getItem("currentUser")) {
//       window.location.href = "/";
//     }
//   }, []);
//   const loginHandler = () => {
//     const user = { email, password };
//     dispatch(loginUser(user));
//   };
//   return (
//     <>
//       <Container>
//         <Form>
//         <h1>Login</h1>
//           <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter email"
//             />
//             <Form.Text className="text-muted">
//               We'll never share your email with anyone else.
//             </Form.Text>
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formBasicPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Password"
//             />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="formBasicCheckbox">
//             <Form.Check type="checkbox" label="Check me out" />
//           </Form.Group>
//           <Button variant="primary" onClick={loginHandler}>
//             Login
//           </Button>
//         </Form>
//       </Container>
//     </>
//   );
// };

// export default Login;


import React, { useState, useEffect } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { loginUser } from "../actions/userAction";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);

  const loginHandler = () => {
    const user = { email, password };
    dispatch(loginUser(user));
  };

  return (
    <>
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh"}}>
        <Card style={{ width: '30rem', padding: '2rem' }}>
          <Card.Body>
            <Form>
              <h1 className="text-center">Login</h1>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" onClick={loginHandler}>
                Login
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Login;
