import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Burger from '../../assets/hero/hero-2.png'
import { Link } from 'react-router-dom'
import '../../styles/HomeStyle.css'


function Section1() {
  return (
    <section className="hero_section" id="hero_section">
      <Container>
        <Row>
          <Col lg={7} className="mb-5 mb-lg-0">
            <div className="position-relative">
              <img src={Burger} className="img-fluid burger" alt="Hero" />
              <div className="price_badge">
                <div className="badge_text">
                  <h4 className="h4_xs">Only</h4>
                  <h4 className="h3_lg">$6.99</h4>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className="hero_text text-center">
              <h1 className="text-white">New Burger</h1>
              <h2 className="text-white">With Mint Mayo and Sauces</h2>
              <p className="text-black pt-2 pb-5">Introducing our new veggie burger: a flavorful combination of grilled vegetable patty with crisp lettuce, ripe tomatoes, melted cheese, and refreshing mint mayo, complemented by a variety of savory sauces.
              </p>
              <Link to="/" className="btn order_now">Order Now</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Section1