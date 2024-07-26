import React, { useEffect, useRef,useState } from 'react';
import { Col, Card as BootstrapCard } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { Alert } from 'react-bootstrap';


function Card({ image, title, rating, paragraph, price, renderRatingIcon,handleAddToCart }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          card.classList.add('visible');
          observer.disconnect();
        }
      },
      { threshold: .2 }
    );

    observer.observe(card);

    return () => {
      observer.disconnect();
    };
  }, []);

  


  return (
    <Col sm={6} lg={4} xl={3} className="mb-4">
      <BootstrapCard className="overflow-hidden" ref={cardRef}>
        <div className="overflow-hidden">
          <BootstrapCard.Img variant="top" src={image} height="300px" />
        </div>
        <BootstrapCard.Body>
          <div className="d-flex align-items-center justify-content-between">
            <div className="item_rating">{renderRatingIcon(rating)}</div>
            <div className="wishlist">
              <i className="bi bi-heart"></i>
            </div>
          </div>
          <BootstrapCard.Title style={{ fontFamily: "queen-of-camelot", wordSpacing: "7px" }}>{title}</BootstrapCard.Title>
          <BootstrapCard.Text style={{ fontFamily: "queen-of-camelot" }}>
            {paragraph}
          </BootstrapCard.Text>
          <div className="d-flex align-items-center justify-content-between">
            <div className="menu_price">
              <h5 className="mb-0">$ {price}</h5>
            </div>
            <div className="add_to_cart">
              <Link to="/our_menu" onClick={handleAddToCart}>
                <i className="bi bi-bag me-2"></i>
                Add To Cart
              </Link>
            </div>
          </div>
        </BootstrapCard.Body>
      </BootstrapCard>
    </Col>
  );
}

export default Card;
