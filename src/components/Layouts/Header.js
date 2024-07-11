import React, { useState } from 'react'
import "../../styles/HeaderStyle.css"
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo/logo.png'


function Header() {
  const [nav, setNav] = useState(false)


  const changeValuOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop
    scrollValue > 100 ? setNav(true) : setNav(false)
  }
  window.addEventListener("scroll", changeValuOnScroll)

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className={`${nav === true ? "sticky" : ""}`}>
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/" className="logo">
              <img src={Logo} alt="Logo" className="img-fluid" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto content">
              <Nav.Link to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                Our Menu
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                Shop
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                <div className="cart">
                  <i className="bi bi-cart2 fs-5"></i>
                  <em className="roundpoint">2</em>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
