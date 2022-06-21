import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'

import Container from 'react-bootstrap/Container'


export default function Header() {
  return (
    <>
    <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">Day2</Navbar.Brand>
    <Nav className="me-auto">
      <Link to="/" className="mx-3">Home</Link>
      <Link to="/about" className="mx-3">About Us</Link>
      <Link to="/contact" className="mx-3">Contact Us</Link>
      <Link to="/product" className="mx-3">Products</Link>

    </Nav>
    </Container>
  </Navbar>
  </>
    
  )
}

