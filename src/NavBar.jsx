import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import React from "react";

const NavBar = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Link  className="navbar-brand" to="home">Home</Link>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
