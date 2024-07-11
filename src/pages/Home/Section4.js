import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PromotionImage from '../../assets/promotion/pro.png'

function Section4() {
    return (
        <>
            <section className="promotion_section">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} className="text-center mb-5 mb-lg-0">
                            <img src={PromotionImage} className="img-fluid" alt="Promotion" />
                        </Col>
                        <Col lg={6} className="px-5">
                            <h2  style={{fontFamily:"queen-of-camelot" , wordSpacing:"7px"}}>Nothing brings people together like a good burger</h2>
                            <p>
                            A good burger has the magical ability to unite people, creating moments of joy and connection. Whether it's a family gathering, a casual get-together with friends, or a community event, the shared enjoyment of a delicious burger fosters camaraderie and happiness. It's more than just a meal; it's an experience that brings smiles and memorable conversations.
                            </p>
                            <ul>
                                <li>
                                    <p>Universal Appeal: Burgers cater to diverse tastes, making them a favorite choice for everyone.</p>
                                </li>
                                <li>
                                    <p>Shared Experience: Enjoying burgers together creates lasting memories and strengthens bonds.</p>
                                </li>
                                <li>
                                    <p>Versatility: With endless customization options, burgers can suit any occasion and satisfy all preferences.</p>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* Parallax scroll */}
            <section className="bg_parallax_scroll">
                
            </section>
        </>
    )
}

export default Section4
