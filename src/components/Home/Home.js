import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/nd.jpg";
import TypeWriter from "./TypeWriter";

function Home() {
  return (
    <section className="home_bg">
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>           

            <Col md={5}>
              <img src={myImg} className="profile-pic" alt="avatar" />
            </Col>

            <Col md={6} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Nnamdi <span className='setpink'>Nnadi</span></strong>
              </h1>
              <p className="heading-description blockquote">
                <h2> Web Developer | Computer Scientist</h2>
                
                A highly skilled and movtivated web developer who deliver best quality and scalable software for business . <br/>             
              </p>
            <div className="heading-type">
                <br/>
                <hr/>
                <TypeWriter />
                <hr/>
              </div>
            </Col>
          </Row>
          <br/><br/><br/>
        </Container>
      </Container>     
    </section>

  );
}

export default Home;
