import React, { useState,Component,useEffect } from "react";
import fire from "./fire";
import firebase from "firebase";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./Images/sound.jpeg";
import Homelogin from "./Homelogin";
import Login from "./Login";
import Homemainpage from "./Homemainpage";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";

function App() {
  const [user, setUser] = useState("");
  




  // ***** On Clicking "Sign In" button, "onSubmit" function will occur
  const onSubmit = () => {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        setUser(result.user);
      })
      .catch(function (error) {
        window.alert("Error! Please Sign In Again");
      });
  };

  // ***** When the user clicks "Log Out", then "handleLogout" will occur
  const handleLogout = () => {
    fire.auth().signOut();
    setUser("");
  };

  return (
    <>
      {user ? (
        <Homemainpage user={user} handleLogout={handleLogout} />
      ) : (
        
        <Router>
        
          {/* Navigation (Menu) Bar for Homelogin Page */}
          <Navbar
            collapseOnSelect
            expand="lg"
            bg="light"
            variant="light"
            fixed="top"
          >
            <Link exact="true" to="/">
              <img
                src={logo}
                width="70"
                height="35"
                className="d-inline-block align-top"
                alt="SoundRule"
              />
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Link
                  to="/aboutus"
                  style={{
                    color: "Black",
                    margin: "4px",
                    textDecoration: "none",
                  }}
                >
                  About Us
                </Link>
                <Link
                  to="/contactus"
                  style={{
                    color: "Black",
                    margin: "4px",
                    textDecoration: "none",
                  }}
                >
                  Contact Us
                </Link>
              </Nav>
              <Nav>
                
              </Nav>
              
              <Nav>
                <Button onClick={onSubmit}>SIGN IN WITH GOOGLE</Button>
              </Nav>
            
            </Navbar.Collapse>
          </Navbar>
       
          {/* For changing page from "Homelogin" to "About Us, Contact Us" */}
          
          <Switch>
          
            <Route
              path="/"
              exact
              render={(props) => <Homelogin {...props} onSubmit={onSubmit} />}
            />
           
            <Route path="/aboutus" component={AboutUs} />
           
            <Route path="/contactus" component={ContactUs} />
            
            <Route
              render={(props) => <Homelogin {...props} onSubmit={onSubmit} />}
            />

          </Switch>

        </Router>
      )}
    </>
  );
}

export default App;
