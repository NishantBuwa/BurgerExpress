import React from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import StoreIOS from '../../assets/shop/appstore.png'
import StoreGoogle from '../../assets/shop/googleplay.png'
import DownloadImage from '../../assets/shop/e-shop.png'
import Brand_1 from '../../assets/brands/brand-11.png'
import Brand_2 from '../../assets/brands/brand-12.png'
import Brand_3 from '../../assets/brands/brand-13.png'
import Brand_4 from '../../assets/brands/brand-14.png'
import Brand_5 from '../../assets/brands/brand-15.png'
import Brand_6 from '../../assets/brands/brand-16.png'
import Brand_7 from '../../assets/brands/brand-17.png'
import Brand_8 from '../../assets/brands/brand-18.png'

function Section5() {
    return (
        <>
            <section className="shop_section">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0">
                            <h4>Download Mobile App and</h4>
                            <h2>Save Upto 20%</h2>
                            <p> Get the best deals by downloading our mobile app from the App Store or Play Store. Enjoy exclusive discounts of up to 20% on your favorite burgers. </p>
                            <Link to="/">
                                <img src={StoreIOS} alt="IOS" className="img-fluid me-3 store" />
                            </Link>
                            <Link to="/">
                                <img src={StoreGoogle} alt="Android" className="img-fluid me-3 store" />
                            </Link>
                        </Col>
                        <Col lg={6}>
                            <img src={DownloadImage} alt="e_shop" className="img-fluid" />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="brand_section">
                <Container>
                    <Row>
                        <Carousel  className="brand_carousel">
                            <Carousel.Item>
                                <Carousel.Caption>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="brand-img">
                                            <img src={Brand_1} className="img-fluid" alt="brand-1" />
                                        </div>
                                        <div className="brand-img">
                                            <img src={Brand_2} className="img-fluid" alt="brand-2" />
                                        </div>
                                        <div className="brand-img">
                                            <img src={Brand_3} className="img-fluid" alt="brand-3" />
                                        </div>
                                        <div className="brand-img">
                                            <img src={Brand_4} className="img-fluid" alt="brand-4" />
                                        </div>
                                        <div className="brand-img">
                                            <img src={Brand_5} className="img-fluid" alt="brand-5" />
                                        </div>
                                        <div className="brand-img">
                                            <img src={Brand_6} className="img-fluid" alt="brand-6" />
                                        </div>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Carousel.Caption>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="brand-img">
                                            <img src={Brand_3} className="img-fluid" alt="brand-3" />
                                        </div>
                                        <div className="brand-img">
                                            <img src={Brand_4} className="img-fluid" alt="brand-4" />
                                        </div>
                                        <div className="brand-img">
                                            <img src={Brand_5} className="img-fluid" alt="brand-5" />
                                        </div>
                                        <div className="brand-img">
                                            <img src={Brand_6} className="img-fluid" alt="brand-6" />
                                        </div>
                                        <div className="brand-img">
                                            <img src={Brand_7} className="img-fluid" alt="brand-7" />
                                        </div>
                                        <div className="brand-img">
                                            <img src={Brand_8} className="img-fluid" alt="brand-8" />
                                        </div>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Section5
