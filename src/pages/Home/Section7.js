import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Section7() {
  return (
    <section className="contact_section">
      <Container>
        <Row className="justify-content-center">
          <Col sm={8} className="text-center">
            <h4>We Guarantee</h4>
            <h2 style={{fontFamily:"queen-of-camelot",wordSpacing:"7px"}}>30 Minutes Delivery!</h2>
            <p style={{fontFamily:"sui-generis"}}>Experience lightning-fast service with our 30-minute delivery guarantee. We promise that your delicious meal will arrive at your doorstep within half an hour, hot and fresh.</p>
            <Link to="/" className="btn btn_red px-4 py-2 rounded-0">
            Call : 9974972599</Link>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Section7
