import React, { useEffect, useState } from "react";
import app from "./fire";
import { Container, Row } from "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Video from "./Video";

const db = app.firestore();

const CategoryWiseVideo = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = await db.collection("users").get();
      setUsers(
        usersCollection.docs.map((doc) => {
          return doc.data();
        })
      );
    };
    fetchUsers();
  }, []);

  return (
    <>
      <div style={{ paddingTop: "60px", margin: "5px" }}>
        <h4>{props.category}</h4>
        <Container fluid>
          <div style={{ marginLeft: "15px" }}>
            <Row>
              {users.map((user) => {
                return user.category === props.category ? (
                  <Video user={user} />
                ) : (
                  ""
                );
              })}
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default CategoryWiseVideo;
