import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./Images/sound.jpeg";
import Userpage from "./Userpage";
import Allvideos from "./Allvideos";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import ErrorPage from "./ErrorPage";
import CategoryWiseVideo from "./CategoryWiseVideo";

// THIS COMPONENT IS FOR SHOWING ALL VIDEOS UPLOADED BY ALL USERS

const Homemainpage = (props) => {
  const currUser = props.user.displayName;
  const email = props.user.email;
  const photoURL = props.user.photoURL;

  return (
    <>
      <Router>
        {/* Navigation (Menu) Bar for this Page */}
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
                  color: "GrayText",
                  margin: "4px",
                  textDecoration: "none",
                }}
              >
                About Us
              </Link>
              <Link
                to="/contactus"
                style={{
                  color: "GrayText",
                  margin: "4px",
                  textDecoration: "none",
                }}
              >
                Contact Us
              </Link>
            </Nav>
            <Nav>
              <Link to="/">
                <Button variant="warning" onClick={props.handleLogout}>
                  LOG OUT
                </Button>
              </Link>

              <Link
                to="/user"
                style={{
                  color: "GrayText",
                  margin: "4px",
                  textDecoration: "none",
                }}
              >
                {currUser}
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {/* Menu Bar Ended */}

        {/* Changing page b/w all categories */}
        <Switch>
          <Route path="/" exact component={Allvideos} />
          <Route
            path="/user"
            render={(props) => (
              <Userpage
                {...props}
                name={currUser}
                email={email}
                photoURL={photoURL}
              />
            )}
          />
          <Route
            path="/newsong"
            render={(props) => (
              <CategoryWiseVideo {...props} category={"New Song"} />
            )}
          />
          <Route
            path="/religious"
            render={(props) => (
              <CategoryWiseVideo {...props} category={"Religious"} />
            )}
          />
          <Route
            path="/oldisgold"
            render={(props) => (
              <CategoryWiseVideo {...props} category={"Old Is Gold"} />
            )}
          />
          <Route
            path="/instrumental"
            render={(props) => (
              <CategoryWiseVideo {...props} category={"Instrumental"} />
            )}
          />
          <Route
            path="/sadsongs"
            render={(props) => (
              <CategoryWiseVideo {...props} category={"Sad"} />
            )}
          />
          <Route
            path="/rap"
            render={(props) => (
              <CategoryWiseVideo {...props} category={"Rap"} />
            )}
          />
          <Route
            path="/others"
            render={(props) => (
              <CategoryWiseVideo {...props} category={"Other"} />
            )}
          />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/contactus" component={ContactUs} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </>
  );
};

export default Homemainpage;
