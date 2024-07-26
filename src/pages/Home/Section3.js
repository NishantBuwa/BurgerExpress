import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Image1 from '../../assets/menu/burger-11.jpg'
import Image2 from '../../assets/menu/burger-12.jpg'
import Image3 from '../../assets/menu/burger-13.jpg'
import Image4 from '../../assets/menu/burger-14.jpg'
import Image5 from '../../assets/menu/burger-15.jpg'
import Image6 from '../../assets/menu/burger-16.jpg'
import Image7 from '../../assets/menu/burger-17.jpg'
import Image8 from '../../assets/menu/burger-18.jpg'
import Card from '../../components/Card'


const mockData = [
    {
        id: "0001",
        image: Image1,
        title: "Garden Delight Burger",
        paragraph: "chilli sauce, tomatoes, pickles, coleslaw",
        rating: 5,
        price: 18.99,
    },
    {
        id: "0002",
        image: Image2,
        title: "Grilled Veggie Burger",
        paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
        rating: 4.5,
        price: 15.99,
    },
    {
        id: "0003",
        image: Image3,
        title: "Avocado & Veggie Burger",
        paragraph: "American cheese, tomato relish, avocado, lettuce, red onion",
        rating: 4,
        price: 18.99,
    },
    {
        id: "0004",
        image: Image4,
        title: "Vegan Burger",
        paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
        rating: 3.5,
        price: 17.99,
    },
    {
        id: "0005",
        image: Image5,
        title: "Double Cheese Burger",
        paragraph: "2 patties, cheddar cheese, mustard, pickles, tomatoes",
        rating: 3.0,
        price: 22,
    },
    {
        id: "0006",
        image: Image6,
        title: "Falafel Burger",
        paragraph: "Turkey, cheddar cheese, onion, lettuce, tomatoes, pickles",
        rating: 3,
        price: 15.49,
    },
    {
        id: "0007",
        image: Image7,
        title: "Smokey House",
        paragraph: "patty, cheddar cheese, onion, lettuce, tomatoes, pickles",
        rating: 2.5,
        price:14.19,
    },
    {
        id: "0008",
        image: Image8,
        title: "Classic Burger",
        paragraph: "cheddar cheese, ketchup, mustard, pickles, onion",
        rating: 2.0,
        price: 12.45,
    },
];


const renderRatingIcon = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (rating >= 1) {
            stars.push(<i key={`fill-${i}`} className="bi bi-star-fill"></i>);
            rating -= 1;
        } else if (rating > 0 && rating < 1) {
            stars.push(<i key={`half-${i}`} className="bi bi-star-half"></i>);
            rating = 0; 
        } else {
            stars.push(<i key={`empty-${i}`} className="bi bi-star"></i>);
        }
    }
    return stars;
}

const redirect=()=>{
    return(
        <Link to="/our_menu"></Link>
    )
}
function Section3() {
    return (
        <div>
            <section className="menu_section">
                <Container>
                    <Row>
                        <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
                            <h2 style={{fontFamily:"queen-of-camelot",wordSpacing:"10px"}}>Our Crazy Burgers </h2>
                            <p className="para" style={{fontFamily:"sui-generis"}}>"Our Crazy Burgers" offer a thrilling twist on classic burgers with bold, unique toppings. Each burger delivers an unforgettable taste experience for those seeking something extraordinary.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        {mockData.map((cardData, index) => (

                            <Card key={index}
                                image={cardData.image}
                                rating={cardData.rating}
                                title={cardData.title}
                                paragraph={cardData.paragraph}
                                price={cardData.price}
                                renderRatingIcon={renderRatingIcon}
                                hanhandleAddToCart={redirect}

                            ></Card>
                        ))}
                    </Row>

                    <Row className="pt-5">
                        <Col sm={6} lg={5}>
                            <div className="ads_box ads_img1 mb-5 mb-md-0">
                                <h4 className="mb-0">GET YOUR FREE</h4>
                                <h5>CHEESE FRIES</h5>
                                <Link to="/" className="btn btn_red px-4 rounded-0">
                                    Learn More</Link>
                            </div>
                        </Col>
                        <Col sm={6} lg={7}>
                            <div className="ads_box ads_img2">
                                <h4 className="mb-0">GET YOUR FREE</h4>
                                <h5>CHEESE FRIES</h5>
                                <Link to="/" className="btn btn_red px-4 rounded-0">
                                    Learn More</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default Section3