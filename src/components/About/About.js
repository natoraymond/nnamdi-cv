import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import { SKILLS, TOOLS } from "../../Data";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={12}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple">About <span className="setpink">Me</span></strong><hr />
            </h1>
            <Aboutcard />
          </Col>          
        </Row>
        <Row className="skill-tools-wrapper">
          <Col className="skill-wrapper">
            <h3 className="project-heading">
               <strong className="setpink"> Skills</strong>
            </h3><hr></hr>
            {SKILLS.map((skill, index) => (
              <Techstack
                name={skill.name}
                initialRating={skill.initialRating}
                key={index}
              />
            ))}
          </Col>
          <Col className="skill-wrapper">
            <h3 className="project-heading">
              Most Used <strong className="setpink">Tools</strong>
            </h3><hr></hr>
            {TOOLS.map((tool, index) => (
              <ul key={index} className="tool-name">
                <li>{tool}</li>
              </ul>
            ))}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
