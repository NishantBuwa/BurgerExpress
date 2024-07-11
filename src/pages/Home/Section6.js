import React from 'react'
import { Container, Row, Carousel } from 'react-bootstrap'
import user1 from '../../assets/blog/review-author-1.jpg'
import user2 from '../../assets/blog/review-author-2.jpg'
import user3 from '../../assets/blog/review-author-3.jpg'
import user4 from '../../assets/blog/review-author-5.jpg'


function Section6() {
  return (
    <section className="blog_section">
      <Container>
        <Row>
          <Carousel>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="user-img">
                  <img src={user1} className="img-fluid" alt="user-1" />
                </div>
                <p> The burgers here are absolutely delicious! Every bite is packed with fresh ingredients, and the flavors blend together perfectly. I've tried many places, but this one tops them all. Highly recommend!</p>
                <div className="item-rating mb-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <h5>BY AMELIE NEWLOVE</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="user-img">
                  <img src={user2} className="img-fluid" alt="user-2" />
                </div>
                <p>I love the variety of burgers available. There's something for everyone, whether you're into classic cheeseburgers or adventurous gourmet options. Plus, the customization options mean I can get exactly what I want every time.</p>
                <div className="item-rating mb-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <h5>BY AMELIE NEWLOVE</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="user-img">
                  <img src={user3} className="img-fluid" alt="user-3" />
                </div>
                <p> The quality of the burgers is outstanding. You can really taste the difference in the premium ingredients used. The patties are juicy, the buns are perfectly toasted, and the toppings are always fresh and flavorful.</p>
                <div className="item-rating mb-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <h5>BY AMELIE NEWLOVE</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="user-img">
                  <img src={user4} className="img-fluid" alt="user-4" />
                </div>
                <p> Not only are the burgers amazing, but the service is also top-notch. The staff is friendly and efficient, and my order is always ready in no time. It's my go-to spot for a quick and satisfying meal.</p>
                <div className="item-rating mb-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <h5>BY AMELIE NEWLOVE</h5>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
    </section>
  )
}

export default Section6
