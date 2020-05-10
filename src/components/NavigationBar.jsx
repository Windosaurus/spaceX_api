import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const NavigationBar = () => (
  <Container>
    <Navbar bg="light" variant="light">
      <Nav className="mr-auto">
        <Nav.Link href="/spaceships">Spaceships</Nav.Link>
        <Nav.Link href="/history">History</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
      </Nav>
    </Navbar>
  </Container>
);

export default NavigationBar;
