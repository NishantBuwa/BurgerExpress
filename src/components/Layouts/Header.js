import React, { useState } from 'react'
import "../../styles/HeaderStyle.css"
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link,useLocation } from 'react-router-dom';
import Logo from '../../assets/logo/logo.png'

function Header() {
  const [nav, setNav] = useState(false)
  const location=useLocation()
  const isContactPage=location.pathname==='/contact_us'

  const changeValuOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop
    scrollValue > 100 ? setNav(true) : setNav(false)
  }
  window.addEventListener("scroll", changeValuOnScroll)

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className={`${nav === true ? "sticky" : ""}`}>
        <Container>
          <Navbar.Brand>
            <Link to="/" className="logo">
              <img src={Logo} alt="Logo" className="img-fluid" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto content" >
              <Nav.Link as={Link} to="/" className={`nav-link ${isContactPage ? 'nav-link-white' : ''}`}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className={`nav-link ${isContactPage ? 'nav-link-white' : ''}`}>
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/our_menu" className={`nav-link ${isContactPage ? 'nav-link-white' : ''}`}>
                Our Menu
              </Nav.Link>
              <Nav.Link as={Link} to="/login" className={`nav-link ${isContactPage ? 'nav-link-white' : ''}`}>
                Sign-in/<br></br>
                Log-in
              </Nav.Link>
              
              <Nav.Link as={Link} to="/contact_us" className={`nav-link ${isContactPage ? 'nav-link-white' : ''}`}>
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to="/" className={`nav-link ${isContactPage ? 'nav-link-white' : ''}`}>
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

