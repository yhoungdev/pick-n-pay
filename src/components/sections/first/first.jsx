import React from 'react'
import {Row, Col , Button, Container} from 'reactstrap'
import './first.css'
function First( props ) {
    return (
        <div  className='mt-5 flow'>
       
            <Container>

                      {/* split the part */}
            <Row>
                {/* first column */}
                <Col xs={12} md={4} sm={5}>
                    <img src={props.img} alt="food image" className='first-img' loading='lazy'/>
                </Col>

                <Col className=''>

                    <div className="shop">
                        <h1>SHOP</h1>
                    </div>
                    <div className="vanila">
                        <h4 className='heading'>{props.heading}</h4>
                        <p className='details'>
                            {props.detail}
                        </p>

                        <span>
                            <Button className='btn'>Shop now   &#8594;</Button>
                        </span>
                    </div>
                </Col>

            </Row>

            </Container>
          


        </div>
    )
}

export default First
