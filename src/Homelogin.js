import React from "react";
import { Button, Container, Row, Col, Modal } from "react-bootstrap";
import cimage from "./Images/centerimg1.jpg";

// LOGIN PAGE OF SOUNDRULE

// ***** "MyVerticallyCenteredModal" is for "More About SoundRule". It will open in center.
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          More About SoundSplash
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Welcome to SoundSplash.You can upload their music audios and videos. Videos
          related to events happening in fests in college can also be uploaded
          by the students. For any cultural competitions in the college, winners
          can be decided by their videos or songs posted on this website.
        </p>
        <b>How To Use</b>

        <ul>
          <li>First sign in through your Google account to access the site.</li>
          <li>
            After successful login, you will see the main page of the site
            showing videos/audios uploaded by all users. In this page, you can
            enjoy watching all user's content.
          </li>
          <li>
            There are seven categories in the main page- New Song, Religious,
            Old Is Gold, Instrumental, Sad, Rap and Other. You can click "See
            More" to see all the videos under that category.
          </li>
          <li>
            Also there will be a User's page showing by the name of the user.
          </li>
          <li>
            On User's page you can upload video and update your profile. Here,
            you can also see your uploaded videos (if any).
          </li>
        </ul>

      </Modal.Body>
      <Modal.Footer style={{ justifyContent: "flex-start" }}>
        <p>Copyright &copy; SoundSplash 2020 - 2021</p>
      </Modal.Footer>
    </Modal>
  );
}

const Homelogin = (props) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div className="bg">
        <Container fluid className="mainBody">
          <h1 className="soundRule">
            <span style={{ color: "rgb(100, 20, 200)" }}>SoundSplash</span>
          </h1>
          <h2 style={{ color:'white' }} className="tagline"> Where Words Fail, Music Speaks </h2>
          <Row>
            <Col xs sm={3} md={4}></Col>
            <Col xs={12} sm={6} md={4}>
              <div className="loginBox">
                <img style={{height:400,width:500}} src={cimage} alt="cimage" class="img-responsive" />
                <br />
              </div>
            </Col>
            <Col xs sm={3} md={4}></Col>
          </Row>
          {/* Sign In Buttons */}
          <Row>
            <Col xs lg={4}></Col>
            <Col xs={12} lg={4} style={{ textAlign: "center" }}>
              <Button
                variant="warning"
                onClick={props.onSubmit}
                className="signInButton"
              >
                SIGN IN
              </Button>
              <Button
                variant="warning"
                onClick={() => setModalShow(true)}
                className="signInButton"
              >
                More About SoundSplash
              </Button>

              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </Col>
            <Col xs lg={4}></Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Homelogin;
