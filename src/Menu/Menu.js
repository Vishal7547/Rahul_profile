import React from 'react'
import './Menu.css'
import {Navbar,Container,Nav} from 'react-bootstrap'
import {Link} from 'react-scroll'

function Menu() {
  return (
    <Navbar id="colors" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand id='dark' to='/home'>Maharani Electric <br/>  & Hardware</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
      <Nav className="ms-auto">
        <Link className='nav' to='/home'>Home</Link>
        <Link className='nav' to='/home'>About</Link>
        <Link className='nav' to='scroll1' smooth={true} duration={1000}>Brand</Link>
        {/* <Nav.Link className='nav' to='/home'>Product</Nav.Link> */}
        <Link className='nav' to='scroll11' smooth={true} duration={1000}>Contact Us</Link>
      </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Menu