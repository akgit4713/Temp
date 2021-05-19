import React, { useEffect, useState } from "react";
import app from "./fire";
import { Container, Row, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Video from "./Video";
import Images from "./Image";

const db = app.firestore();

const Allvideo = () => {
  const [newSong, setNewSong] = useState([]);
  const [religious, setReligious] = useState([]);
  const [oldisgold, setOldIsGold] = useState([]);
  const [instrumental, setInstrumental] = useState([]);
  const [sad, setSad] = useState([]);
  const [rap, setRap] = useState([]);
  const [other, setOther] = useState([]);

  useEffect(() => {
    const fetchNewSong = async () => {
      const usersCollection = await db.collection("New Song").get();
      setNewSong(
        usersCollection.docs.map((doc) => {
          return doc.data();
        })
      );
    };

    const fetchReligious = async () => {
      const usersCollection = await db.collection("Religious").get();
      setReligious(
        usersCollection.docs.map((doc) => {
          return doc.data();
        })
      );
    };

    const fetchOldOIsGold = async () => {
      const usersCollection = await db.collection("Old Is Gold").get();
      setOldIsGold(
        usersCollection.docs.map((doc) => {
          return doc.data();
        })
      );
    };

    const fetchInstrumental = async () => {
      const usersCollection = await db.collection("Instrumental").get();
      setInstrumental(
        usersCollection.docs.map((doc) => {
          return doc.data();
        })
      );
    };

    const fetchSad = async () => {
      const usersCollection = await db.collection("Sad").get();
      setSad(
        usersCollection.docs.map((doc) => {
          return doc.data();
        })
      );
    };

    const fetchRap = async () => {
      const usersCollection = await db.collection("Rap").get();
      setRap(
        usersCollection.docs.map((doc) => {
          return doc.data();
        })
      );
    };

    const fetchOther = async () => {
      const usersCollection = await db.collection("Other").get();
      setOther(
        usersCollection.docs.map((doc) => {
          return doc.data();
        })
      );
    };

    fetchNewSong();
    fetchReligious();
    fetchOldOIsGold();
    fetchInstrumental();
    fetchSad();
    fetchRap();
    fetchOther();
  }, []);

  return (
    <>
      <div style={{ paddingTop: "60px", margin: "5px" }}>
        <Container fluid>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Search By Category
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#newsongs">New Songs</Dropdown.Item>
              <Dropdown.Item href="#religious">Religious</Dropdown.Item>
              <Dropdown.Item href="#oldisgold">Old is Gold</Dropdown.Item>
              <Dropdown.Item href="#instrumental">Instrumental</Dropdown.Item>
              <Dropdown.Item href="#sadsongs">Sad Songs</Dropdown.Item>
              <Dropdown.Item href="#rap">Rap</Dropdown.Item>
              <Dropdown.Item href="#others">Others</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <div id="newsongs" style={{ marginTop: "10px" }}>
            &nbsp;
          </div>

          <div className="category">
            <div style={{ marginLeft: "15px" }}>
              <h5> New Songs </h5>
              <Row>
                {newSong.slice(0, 4).map((user) => {
                  return <Video user={user} key={user.videoname} />;
                })}
              </Row>
              <Row>
                <Link
                  to="/newsong"
                  style={{
                    color: "GrayText",
                    margin: "4px",
                    textDecoration: "none",
                  }}
                >
                  See More
                </Link>
              </Row>
            </div>
          </div>

          <div id="religious" className="space">
            &nbsp;
          </div>

          <div>
            <h5>Religious</h5>
            <Row>
              {religious.slice(0, 4).map((user) => {
                return <Video user={user} key={user.videoname} />;
              })}
            </Row>
            <Row>
              <Link
                to="/religious"
                style={{
                  color: "GrayText",
                  margin: "4px",
                  textDecoration: "none",
                }}
              >
                See More
              </Link>
            </Row>
          </div>

          <div id="oldisgold" className="space">
            &nbsp;
          </div>

          <div className="category">
            <div style={{ marginLeft: "15px" }}>
              <h5>Old is Gold</h5>
              <Row>
                {oldisgold.slice(0, 4).map((user) => {
                  return <Video user={user} key={user.videoname} />;
                })}
              </Row>
              <Row>
                <Link
                  to="/oldisgold"
                  style={{
                    color: "GrayText",
                    margin: "4px",
                    textDecoration: "none",
                  }}
                >
                  See More
                </Link>
              </Row>
            </div>
          </div>

          <div id="instrumental" className="space">
            &nbsp;
          </div>
          <div>
            <h5>Instrumental</h5>
            <Row>
              {instrumental.slice(0, 4).map((user) => {
                return <Video user={user} key={user.videoname} />;
              })}
            </Row>
            <Row>
              <Link
                to="/instrumental"
                style={{
                  color: "GrayText",
                  margin: "4px",
                  textDecoration: "none",
                }}
              >
                See More
              </Link>
            </Row>
          </div>

          <div id="sadsongs" className="space">
            &nbsp;
          </div>

          <div className="category">
            <div style={{ marginLeft: "15px" }}>
              <h5>Sad Songs</h5>
              <Row>
                {sad.slice(0, 4).map((user) => {
                  return <Video user={user} key={user.videoname} />;
                })}
              </Row>
              <Row>
                <Link
                  to="/sadsongs"
                  style={{
                    color: "GrayText",
                    margin: "4px",
                    textDecoration: "none",
                  }}
                >
                  See More
                </Link>
              </Row>
            </div>
          </div>

          <div id="rap" className="space">
            &nbsp;
          </div>
          <div>
            <h5>Rap</h5>
            <Row>
              {rap.slice(0, 4).map((user) => {
                return <Video user={user} key={user.videoname} />;
              })}
            </Row>
            <Row>
              <Link
                to="/rap"
                style={{
                  color: "GrayText",
                  margin: "4px",
                  textDecoration: "none",
                }}
              >
                See More
              </Link>
            </Row>
          </div>

          <div id="others" className="space">
            &nbsp;
          </div>
          <div className="category">
            <div style={{ marginLeft: "15px" }}>
              <h5>Others</h5>
              <Row>
                {other.slice(0, 4).map((user) => {
                  return <Images user={user} key={user.videoname} />;
                })}
              </Row>
              <Row>
                <Link
                  to="/others"
                  style={{
                    color: "GrayText",
                    margin: "4px",
                    textDecoration: "none",
                  }}
                >
                  See More
                </Link>
              </Row>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Allvideo;
