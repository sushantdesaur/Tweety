import { Form, Button, FloatingLabel } from "react-bootstrap";

const Tweet = () => {
     const handleSubmit = () => {
       alert("You Tweeted");
     };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FloatingLabel
          controlId="floatingInput"
          label="What's on your mind?"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="What's on your mind?" />
        </FloatingLabel>

        <Button
          variant="primary"
          type="submit"
          className="rounded-pill btn-lg d-flex justify-content-center"
        >
          Tweet
        </Button>
      </Form>
    </>
  );
};

export default Tweet;
