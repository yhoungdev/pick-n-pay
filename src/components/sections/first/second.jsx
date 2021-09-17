import React from 'react'
import {Row, Col , Button, Container} from 'reactstrap'
import './first.css'
import './second.css'
function Second( props ) {
    return (
        <div  className='mt-5 flow'>
       
            <Container>

                      {/* split the part */}
            <Row className='second'>
                {/* Second column */}
                <Col xs={12} md={2} sm={5} >
                    <img src={props.img} alt="food image" className='first-img' loading='lazy'/>
                </Col>

                <Col className='' md={10} >

                    <div className="along">
                        <h1>{props.shade}</h1>
                    </div>
                    <div className="vanila">
                        <h4 className='heading'>{props.heading}</h4>
                        <p className='details detailed'>
                            {props.detail}
                        </p>

                        <span>
                            <Button className='btn'>Shop now &#8594;</Button>
                        </span>
                    </div>
                </Col>

            </Row>

            </Container>
          


        </div>
    )
}

export default Second
