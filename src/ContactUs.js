import React, { useState } from "react";
import app from "./fire";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";

// THIS PAGE IS FOR CONTACTING THE SOUNDRULE TEAM

const db = app.firestore();

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [universityRoll, setUniversityRoll] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      window.alert("Please Fill All Fields!");
      return;
    }

    setLoader(true);

    await db
      .collection("Contact Us")
      .doc(name + " -> " + email)
      .set({
        Name: name,
        Email: email,
        UniversityRoll: universityRoll,
        Message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setUniversityRoll("");
    setMessage("");
  };

  return (
    <>
      <Container>
        <Row style={{ margin: "0px 10px" }}>
          <div style={{ width: "400px", margin: "0 auto", height: "98vh" }}>
            <form className="contactForm" onSubmit={handleSubmit}>
              <h1>Contact Us </h1>
              <p style={{ color: "red" }}>
                NOTE: All fields are necessary to fill
              </p>

              <label>Name</label>
              <input
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label>Email</label>
              <input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label>Message</label>
              <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>

              <button
                type="submit"
                style={{ background: loader ? "#ccc" : " #e0a800 " }}
              >
                Submit
              </button>
            </form>
          </div>
        </Row>
      </Container>
      <div className="footer">
        <footer style={{ padding: "15px" }}>
          Copyright &copy; SoundSplash 2020 - 2021 <br />
        </footer>
      </div>
    </>
  );
};

export default ContactUs;
