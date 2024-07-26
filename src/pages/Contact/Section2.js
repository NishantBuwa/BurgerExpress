import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Section2() {
    return (
        <div>
            <div className="contact-2-container">
                <div className="contact-content">
                    <Container>
                        <Row className="contact-row d-flex justify-content-center">
                            <Col sm={6} lg={3}>
                                <div className=" text-center">

                                    <i className="bi bi-geo-alt"></i>
                                    <h2>Address</h2>

                                    <h4>BurgerExpress Main Office</h4>
                                    <p>436 Burger Lane<br/>Burger Town, BK 178</p>

                                    <h4>Downtown Office</h4>
                                    <p>5678 Fast Food Street<br/>Central City, CC 67890</p>

                                    <h4>Suburb Office</h4>
                                    <p>9101 Suburban Avenue<br/>Outskirts, OS 23456</p>

                                </div>
                            </Col>

                            <Col sm={6} lg={3}>
                                <div className=" text-center">

                                    <i className="bi bi-telephone"></i>
                                    <h2>Phone</h2>

                                    <h4>BurgerExpress Main Office</h4>
                                    <p>985643739</p>

                                    <h4>24/7 Customer Care Department</h4>
                                    <p>946584940<br/>(Then press 2 for emegercency calls)</p>

                                    <h4>Franchise Opportunities</h4>
                                    <p>895623147</p>

                                </div>
                            </Col>

                            <Col sm={6} lg={3}>
                                <div className=" text-center">

                                    <i className="bi bi-envelope"></i>
                                    <h2>Email</h2>

                                    <h4>General Inquiries</h4>
                                    <p><a href="mailto:info@burgerexpress.com">info@burgerexpress.com</a></p>

                                    <h4>Order Inquiries</h4>
                                    <p><a href="mailto:orders@burgerexpress.com">orders@burgerexpress.com</a></p>

                                    <h4>Customer Service</h4>
                                    <p><a href="mailto:support@burgerexpress.com">support@burgerexpress.com</a></p>

                                    <h4>Employment Opportunities</h4>
                                    <p><a href="mailto:careers@burgerexpress.com">careers@burgerexpress.com</a></p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default Section2
