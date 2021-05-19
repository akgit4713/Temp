import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from "react-bootstrap";

// THIS PAGE IS FOR THE CREATORE OF THIS WEBSITE

const AboutUs = () => {
  return (
    <>
      <div style={{ paddingTop: "60px", margin: "5px" }}>
        <h1>About Us</h1>
        <br />

        <Container>
          <Row
            style={{
              backgroundColor: "lightblue",
              padding: "15px",
              borderRadius: "7px",
            }}
          >
            <Col md={2}>
            </Col>
            <Col>
              <p>
                <b>Anurag Kumar</b> |{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/anurag-kumar-733913176/"
                >
                  <b>LinkedIn</b>
                </a>{" "}
                <br /><br /> Email - anuragkr4713@gmail.com{" "}
              </p>
            </Col>

            <Col md={2}>
            </Col>
            <Col>
              <p>
                <b>Satyam Prakash</b> |{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/satyam-prakash-9aa617204/"
                >
                  <b>LinkedIn</b>
                </a>{" "}
                <br /><br /> Email - satyamp1947@gmail.com{" "}
              </p>
            </Col>
          </Row>

          <div style={{ margin: "10px" }}> &nbsp; </div>
        </Container>
      </div>
      <div
        className="footer"
        style={{ position: "relative", bottom: "-365px" }}
      >
        <footer style={{ padding: "15px" }}>
          Copyright &copy; SoundSplash 2020 - 2021 <br /> 
        </footer>
      </div>
    </>
  );
};

export default AboutUs;
