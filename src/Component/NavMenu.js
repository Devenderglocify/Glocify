import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'; 

export const NavMenu = () => {
  return (
    <div>
        <Navbar fixed="top" bg="" variant="dark">
        <Container fluid="xxl">
          <Navbar.Brand href="/"><img src='././images/logo.png' alt='' /></Navbar.Brand>
          <Nav className="justify-content-between">
            <NavLink className='fw-normal text-decoration-none text-uppercase text-white' to="/">Home</NavLink>
            <NavLink className='fw-normal text-decoration-none text-uppercase text-white' to="/webdevelopment">Web Development</NavLink>
          </Nav>
          <Button variant="primary">Start Project</Button>{' '}
        </Container>
      </Navbar> 
    </div>
  )
}
