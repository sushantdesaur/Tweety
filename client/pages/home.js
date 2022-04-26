// pages/home.js
import styles from "../styles/Home.module.css";
import { Container, Row, Col, Nav } from "react-bootstrap";
import Header from "../components/header"

const Home = () => {
  return (
    <>
      <Container className={styles.container}>
        <h1>Home</h1>
        <Row>
          <Col>
            <Header className=" d-flex justify-content-center" />
          </Col>
          <Col>
            <main></main>
          </Col>
          <Col>
            <footer></footer>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
