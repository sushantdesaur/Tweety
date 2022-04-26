import {
  Container,
  Form,
  Button,
  Row,
  Col,
  FloatingLabel,
} from "react-bootstrap";

const Login = () => {
  return (
    <>
      <Container fluid className="d-flex justify-content-center">
        <Row>
          <Col>
            <h1>Login In</h1>
            <Form>
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
