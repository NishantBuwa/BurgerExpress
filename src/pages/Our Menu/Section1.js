import React, { useState } from 'react'
import Card from '../../components/Card'
import AlertContainer from '../../components/AlertContainer';
import { Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';


import Image1 from '../../assets/menu/burger-11.jpg'
import Image2 from '../../assets/menu/burger-12.jpg'
import Image3 from '../../assets/menu/burger-13.jpg'
import Image4 from '../../assets/menu/burger-14.jpg'
import Image5 from '../../assets/menu/burger-15.jpg'
import Image6 from '../../assets/menu/burger-16.jpg'
import Image7 from '../../assets/menu/burger-17.jpg'
import Image8 from '../../assets/menu/burger-18.jpg'
import Image9 from '../../assets/menu/burger-19.webp'
import Image10 from '../../assets/menu/burger-20.jpeg'
import Image11 from '../../assets/menu/burger-21.png'
import Image12 from '../../assets/menu/burger-22.avif'
import Image13 from '../../assets/menu/burger-23.avif'
import Image14 from '../../assets/menu/burger-24.webp'
import Image15 from '../../assets/menu/burger-25.jpg'
import Image16 from '../../assets/menu/burger-26.jpg'
import Image17 from '../../assets/menu/burger-27.webp'
import Image18 from '../../assets/menu/burger-28.webp'
import Image19 from '../../assets/menu/burger-29.jpg'
import Image20 from '../../assets/menu/burger-30.jpeg'
import Image6RBG from '../../assets/menu/burger-16-removebg-preview.png'
import Image11RBG from '../../assets/menu/burger-21-removebg-preview.png'
import Image26RBG from '../../assets/menu/burger-26-removebg-preview.png'

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
    price: 14.19,
  },
  {
    id: "0008",
    image: Image8,
    title: "Classic Burger",
    paragraph: "cheddar cheese, ketchup, mustard, pickles, onion",
    rating: 2.0,
    price: 12.45,
  },
  {
    id: "0009",
    image: Image9,
    title: "Mushroom Swiss Burger",
    paragraph: "Sauteed mushrooms, Swiss cheese, lettuce, tomato, garlic aioli",
    rating: 4.5,
    price: 16.99,
  },
  {
    id: "0010",
    image: Image10,
    title: "Sweet Potato Burger",
    paragraph: "Sweet potato patty, avocado, lettuce, tomato, sriracha mayo",
    rating: 4.0,
    price: 17.49,
  },
  {
    id: "0011",
    image: Image11,
    title: "Black Bean Burger",
    paragraph: "Black bean patty, guacamole, salsa, lettuce, cheddar cheese",
    rating: 4.2,
    price: 16.49,
  },
  {
    id: "0012",
    image: Image12,
    title: "Greek Veggie Burger",
    paragraph: "Chickpea patty, tzatziki sauce, cucumbers, olives, feta cheese",
    rating: 4.3,
    price: 18.29,
  },
  {
    id: "0013",
    image: Image13,
    title: "Chipotle Bean Burger",
    paragraph: "Chipotle-spiced bean patty, avocado, lettuce, tomato, chipotle mayo",
    rating: 4.1,
    price: 16.99,
  },
  {
    id: "0014",
    image: Image14,
    title: "Roasted Beet Burger",
    paragraph: "Roasted beet patty, goat cheese, arugula, pickled onions",
    rating: 4.4,
    price: 17.99,
  },
  {
    id: "0015",
    image: Image15,
    title: "Zesty Veggie Burger",
    paragraph: "Curried cauliflower patty, raita sauce, lettuce, tomato",
    rating: 4.0,
    price: 15.99,
  },
  {
    id: "0016",
    image: Image16,
    title: "Zucchini & Corn Burger",
    paragraph: "Zucchini and corn patty, salsa, avocado, lettuce",
    rating: 4.2,
    price: 16.49,
  },
  {
    id: "0017",
    image: Image17,
    title: "Pumpkin & Sage Burger",
    paragraph: "Pumpkin patty, sage aioli, spinach, cranberries",
    rating: 4.3,
    price: 17.29,
  },
  {
    id: "0018",
    image: Image18,
    title: "Pesto Veggie Burger",
    paragraph: "Pesto sauce, grilled veggies, mozzarella cheese, lettuce",
    rating: 4.6,
    price: 18.99,
  },
  {
    id: "0019",
    image: Image19,
    title: "Spicy Lentil Burger",
    paragraph: "Spicy lentil patty, jalapeño aioli, lettuce, tomato",
    rating: 4.0,
    price: 15.99,
  },
  {
    id: "0020",
    image: Image20,
    title: "Spicy Blackbean Burger",
    paragraph: "Sun-dried tomato patty, basil pesto, arugula, goat cheese",
    rating: 4.5,
    price: 17.49,
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

function Section1() {


  const [showAlert, setShowAlert] = useState(false);

  const handleAddToCart = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 1000);
  };

  return (

    <div>
      <div className="Menu-section1-container">
        <div className="heading d-flex justify-content-center align-items-center">
          <h1>Our Menu</h1>
          <h3>Delicious Burgers Made Fresh Just for You!</h3>
        </div>
        <Container className="My-container">
          <Row className='carousel-row'>
            <Carousel className="my-carousel">
              <Carousel.Item className="carousel-item">
                <Carousel.Caption>
                  <div className="burger-img">
                    <img src={Image6RBG} className="img-fluid my-4 mx-5" alt="burger-1"></img>
                  </div>
                  <div className="carousel-content">
                    <h3>Falafel Burger</h3>
                    <p className="content-para">Turkey, cheddar cheese, onion, lettuce, tomatoes, pickles.</p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="carousel-item">
                <Carousel.Caption>
                  <div className="burger-img">
                    <img src={Image11RBG} className="img-fluid my-4 mx-5" alt="burger-2"></img>
                  </div>
                  <div className="carousel-content">
                    <h3>Black Bean Burger</h3>
                    <p className="content-para">Black bean patty, guacamole, salsa, lettuce, cheddar cheese.</p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="carousel-item">
                <Carousel.Caption className="third-carousel">
                  <div className="burger-img img-3">
                    <img src={Image26RBG} className="img-fluid my-5 mx-2" alt="burger-3"></img>
                  </div>
                  <div className="carousel-content content-3">
                    <h3>Zucchini & Corn Burger</h3>
                    <p className="content-para">Zucchini and corn patty, salsa, avocado, lettuce</p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="carousel-item">
                <Carousel.Caption className="d-flex justify-content-center align-items-center">
                  <div className="carousel-text d-flex justify-content-center align-items-center">
                    <div className="neon-text">Need more burger choices?</div>
                    <div className="neon-text">Our full section is just a scroll away!</div>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Row>
        </Container>
        <Container>
          <Row>
            <AlertContainer showAlert={showAlert} />
            {mockData.map((cardData, index) => (

              <Card key={index}
                image={cardData.image}
                rating={cardData.rating}
                title={cardData.title}
                paragraph={cardData.paragraph}
                price={cardData.price}
                renderRatingIcon={renderRatingIcon}
                handleAddToCart={handleAddToCart}
              ></Card>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Section1
