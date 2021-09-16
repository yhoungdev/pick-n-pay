import React from 'react'
import './footer.css'
import {COntainer, Col, Row, Container} from 'reactstrap'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
 const  Footer = () => {
    return (
        <>  
            <footer>
                
                <Container>

                <div className="footer">

<Row>

    <Col >
        <img src="https://picknpayng.com/pnpx/wp-content/uploads/2019/10/onlineshopping_logo.png" alt="" className='plogo'/>

    </Col>

    <Col xs={12} md={6} sm={6}>
        <h5>More about</h5>

        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure incidunt ad deserunt perferendis dolorum non laboriosam praesentium sint ducimus qui exercitationem repudiandae, recusandae, beatae nemo consequuntur id delectus minima ut.</p>
        </div>
    </Col>

    <Col>
        <h5>Follow us</h5>

        <div className="media">
            <p>Follow us on social media for more </p>

            <div className="social">
                <span>  <FaTwitter/>  </span>
                <span> <FaInstagram/> </span>
                <span>  <FaFacebook/> </span>
                <span>  <FaLinkedin/> </span>
            </div>

        </div>

    </Col>

    


</Row>

</div>
                                                                                       

                </Container>

            </footer>
        </>
    )
}
export default Footer; 