// client/index.js

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


import { Container, Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tweety</title>
        <meta
          name="description"
          content="Twitter Clone using React and Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Container className='bg-dark'>
          <Row>
            <Col>
            1
            </Col>
            <Col>
            2
            </Col>
          </Row>
        </Container>

        <button className="btn btn-primary" type="submit">Logout</button>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
