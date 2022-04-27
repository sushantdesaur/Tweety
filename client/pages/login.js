import { useState, useContext } from "react";
import axios from "axios";
import { Context } from "../context";
import { useRouter } from "next/router";

import {
  Container,
  Form,
  Button,
  Row,
  Col,
  FloatingLabel,
} from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //state
  const {state, dispatch} = useContext(Context)

  // router
  const router = useRouter()

  console.log("STATE =>", state)

 
  const handleSubmit = async (e) => {
    // Prevent browser from refreshing
    e.preventDefault();

    try {
      const { data } = await axios.post(`/api/login`, {
        email,
        password,
      });
      // console.log("LOGIN RESPONSE =>", data);
       dispatch({
         type: "LOGIN",
         payload: data,
       });

       // save in local storage
       window.localStorage.setItem('user', JSON.stringify(data))

       // redirect 
       router.push('/')

      // console.table({name, email, birth,password});
    } catch (err) {
      console.log(err.response.data)
    }
  };

  return (
    <>
      <Container fluid className="d-flex justify-content-center">
        <Row>
          <Col>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingPassword"
                label="Password"
                className="mb-3"
              >
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FloatingLabel>
              <div className="text-center">
                <Button
                  variant="primary"
                  type="submit"
                  className="rounded-pill btn-lg"
                >
                  Submit
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
