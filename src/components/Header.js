import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
export class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Cocktails</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/fav">favorites</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
