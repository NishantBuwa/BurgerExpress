import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Pizza from '../../assets/about/pizza.png'
import Salad from '../../assets/about/salad.png'
import Delivery from '../../assets/about/delivery-bike.png'

// Mock Data Cards
const mockData = [
    {
        image: Pizza,
        title: "Original",
        paragraph: ` Our commitment to originality means every burger is crafted with unique flavors and fresh, locally-sourced ingredients, ensuring a distinctive culinary experience with every bite.`,
    },
    {
        image: Salad,
        title: "Quality Foods",
        paragraph: `We pride ourselves on serving only the highest quality food. Our burgers are made from premium ingredients, cooked to perfection, and crafted with care to deliver exceptional taste and satisfaction.`,
    },
    {
        image: Delivery,
        title: "Fastest Delivery",
        paragraph: `Enjoy the convenience of the fastest delivery service in town. We prioritize promptness without compromising on the quality and freshness of your order, ensuring your burger arrives hot and delicious right when you need it.`,
    },
    // Add more mock data objects as needed
];

function Section2() {
    return (
        <>
            <section className="about_section">
                <Container>
                    <Row>
                        <Col lg={{ span: 8, offset: 2 }} className="text-center">
                            <h2>The burger tastes better when you eat it with your family</h2>
                            <p>"The Burger Tastes Better When You Eat It With Your Family" embodies the belief that sharing food with loved ones enhances the dining experience. This React-powered application encourages families to explore, create, and enjoy delicious burger together.
                            </p>
                            <Link to="/" className="btn order_now btn_red">
                                Explore Full Menu</Link>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="about_wrapper">
                <Container>
                    <Row className="justify-content-md-center">
                        {mockData.map((cardData, index) => (
                            <Col md={6} lg={4} className="md-4 mb-md-0" key={index}>
                                <div className="about_box text-center">
                                    <div className="about_icon">
                                        <img src={cardData.image} className="img-fluid" alt="icon" />
                                    </div>
                                    <h4 style={{fontFamily:"queen-of-camelot",wordSpacing:"5px"}}>{cardData.title}</h4>
                                    <p style={{fontFamily:"sui-generis"}}>{cardData.paragraph}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Section2
