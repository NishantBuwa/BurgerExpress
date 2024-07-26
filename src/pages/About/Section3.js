import React from 'react'
import truck from '../../assets/AboutPage-images/History.jpeg'
import interior from '../../assets/AboutPage-images/interior.jpeg'

function Section3() {
    return (
        <div>
            <div className="section3-container">
                <div className="section3-heading d-flex justify-content-center">
                    <h1>Our Story</h1>
                </div>
                <div className="section3-img">
                    <img src={truck} alt="" className="truck"/>
                    <img src={interior} alt="" className="store"/>
                </div>
                <div className="section3-para d-flex justify-content-center align-items-center">
                    <p>
                        BurgerExpress began its journey in 2015 as a humble food truck parked on the bustling streets of downtown. Founded by Jane Doe, a passionate chef with a vision for creating the perfect burger, BurgerExpress quickly gained popularity for its fresh ingredients, bold flavors, and friendly service.
                    </p>
                    <p>
                        What started as a mobile kitchen serving up gourmet burgers on the go soon grew into a beloved local favorite. With each sizzling patty and handcrafted bun, BurgerExpress earned a reputation for quality and taste, attracting burger enthusiasts from all corners of the city.
                    </p>
                    <p>
                        Driven by a commitment to excellence and a love for good food, BurgerExpress expanded its footprint, opening multiple brick-and-mortar locations across town. Today, we continue to uphold our founder's dedication to using only the finest ingredients and delivering a dining experience that satisfies both the palate and the soul.
                    </p>
                    <p>
                        Join us on this delicious journey as we serve up more than just burgers – we serve up memories, community, and a passion for great food. Experience why BurgerExpress has become more than just a place to eat; it's a destination where flavor meets family.
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Section3
