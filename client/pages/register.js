import { useState } from "react";
import axios from "axios";

import {
  Container,
  Form,
  Button,
  Row,
  Col,
  FloatingLabel,
} from "react-bootstrap";

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  // const [birth, setBirth] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    // Prevent browser from refreshing
    e.preventDefault();

    const { data } = await axios.post(`/api/register`,
      {
        name,
        username,
        email,
        password,
      }
    );
    console.log("REGISTER RESPONSE =>", data);
    // console.table({name, email, birth,password});
  };

  return (
    <>
      <Container fluid className="d-flex justify-content-center">
        <Row>
          <Col>
            <h1>Create your account</h1>
            <Form onSubmit={handleSubmit}>
              <FloatingLabel
                controlId="floatingInput"
                label="Name"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Form.Text className="text-muted">
                  Enter you full name
                </Form.Text>
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Username"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <Form.Text className="text-muted">
                  Enter username
                </Form.Text>
              </FloatingLabel>

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
              {/* 
              <FloatingLabel
                controlId="floatingInput"
                label="Date of birth"
                className="mb-3"
              >
                <Form.Control
                  type="date"
                  value={birth}
                  onChange={(e) => setBirth(e.target.value)}
                />
              </FloatingLabel> */}

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

export default Register;
