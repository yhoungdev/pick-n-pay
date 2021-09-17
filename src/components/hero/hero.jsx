import React from 'react'
import Header from '../header/header'
import './hero.css'
import {Container, Col,Row, Button} from 'reactstrap'
import burger from '../assets/burger.png'
function Hero() {
    return (
        <div className='top-part'>
            
            <section>
               

                    <div className="hero">
                    <Header/>
                        <div className="overlay">

                            {/* inner details */}
                            <Container>

                            <div className="hero-intro">

                                <Row className='align-items-center sm-row' >
                                    <Col xs={12} md='12' sm={12} lg={6} xl={6}>

                                            <div className="role">
                                                    
                                                    <h2 className='intro'>Pick 'n' Pay</h2>

                                                    <p> Enjoy the best shopping experience for you and your family and friends  </p>
                                                    <span>
                                                        <Button className='hero-btn'>Shop now  &#8594;</Button>
                                                    </span>

                                            </div>

                                    </Col>

                                    <Col>
                                        <img src={burger} alt="" className='hero-img'/>
                                    </Col>
                                </Row>



                            </div>
                            
                           
                            </Container>
                            

                        </div>
                    </div>
               
            </section>

            
        </div>
    )
}

export default Hero
