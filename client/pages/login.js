import styles from "../styles/Home.module.css";

import {
  Container,
  Form,
  Button,
  Row,
  Col,
  FloatingLabel,
} from "react-bootstrap";

const Login = () => {
  const handleSubmit = () => {
    console.log("LOGIN RESPONSE => ")
  }

  return (
    <>
      <Container fluid>
        <Row>
          <Col lg={4}>
            <h1>Login In</h1>
            <Form onSubmit={handleSubmit}>
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control type="email" placeholder="name@example.com" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingPassword"
                label="Password"
                className="mb-3"
              >
                <Form.Control type="password" placeholder="Password" />
              </FloatingLabel>

              <Button
                variant="primary"
                type="submit"
                className="rounded-pill btn-lg d-flex justify-content-center"
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
