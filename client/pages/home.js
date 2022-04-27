// pages/home.js
import styles from "../styles/Home.module.css";
import { Container, Row, Col, Nav } from "react-bootstrap";

import Header from "../components/header"
import Tweet from "../components/Tweet";

const Home = () => {
  return (
    <>
      <Container className={styles.container}>
        <h1>Tweety</h1>
        <Row>
          <Col>
            <Header />
          </Col>
          <Col>
            <Tweet style={{ color: "black" }} />
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
