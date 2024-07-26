import React from 'react'
import '../../styles/AboutStyle.css'
import exterior from '../../assets/AboutPage-images/exterior-3.png'
import interior from '../../assets/AboutPage-images/interior.jpeg'
import { Row } from 'react-bootstrap'

function Section1() {
  return (
    <div>
      <div className="about-container">
        <div className="about d-flex justify-content-center align-items-center">
          <h1> Welcome to BurgerExpress</h1>
          <Row>
            <img src={exterior} alt="" className="img-fluid burgerexpress" />
            <img src={interior} alt="" className="img-fluid burgerexpress" />
          </Row>
          <p >The inviting exterior of BurgerExpress welcomes guests to a memorable dining experience. At BurgerExpress, we take pride in serving gourmet vegetarian burgers crafted with the freshest ingredients. Our menu features a diverse selection of mouth-watering burgers, each bursting with flavor and creativity. Whether you're a long-time vegetarian or exploring plant-based options, our friendly staff and cozy ambiance make every visit special. Join us for a culinary journey that delights the senses and satisfies your cravings.</p>
        </div>
        <div className="burgericon">
          <img src="https://img.icons8.com/?size=100&id=81341&format=png&color=000000" alt="" height="70px" width="70px"/>
        </div>
        <div className="burgericon">
          <img src="https://img.icons8.com/?size=100&id=81341&format=png&color=000000" alt="" height="70px" width="70px"/>
        </div>
      </div>
    </div>
  )
}

export default Section1