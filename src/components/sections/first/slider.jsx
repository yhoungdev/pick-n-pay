import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' 
import {Carousel} from 'react-responsive-carousel'
import { Container } from 'reactstrap'
import './slider.css'
function Slider() {
    return (
        <div>
            <h1 className='text-center mb-4' >Glance of what you can get</h1>
            <Container>
                <Carousel>
  
                <div>
                    <img src="https://cdn.vox-cdn.com/thumbor/RzabiOl7nXsT1uVOlO0SxhSNDhg=/0x0:1117x521/1200x800/filters:focal(481x215:659x393)/cdn.vox-cdn.com/uploads/chorus_image/image/68758039/McPlant_Burger.0.png" className='slide-img' />
                    <p className="legend"></p>
                </div>
                <div>
                    <img src="https://cdn.vox-cdn.com/thumbor/cSDfc3fpLOeYbtYaCWepmX8mygs=/0x0:2048x1365/1200x800/filters:focal(861x520:1187x846)/cdn.vox-cdn.com/uploads/chorus_image/image/68493550/IMG_6310.0.jpg" className='slide-img'/>
                    <p className="legend"></p>
                </div>

                <div>
                    <img src="https://thumbor.thedailymeal.com/MTzCEVrDQvEwrsodZ7hTlL6ML0Y=/870x565/filters:focal(980x733:981x734)/https://www.thedailymeal.com/sites/default/files/story/2020/shutterstock_1751836019_0.jpg" className='slide-img'/>
                    <p className="legend"></p>
                </div>
            </Carousel>
            </Container>
        </div>
    )
}

export default Slider
