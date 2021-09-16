import React from 'react'
import Hero from '../../components/hero/hero'
import First from '../../components/sections/first/first'
import Second from '../../components/sections/first/second'
import vanila from './img/vanila.jpg'
import filter from './img/filter.jpg'
import Third from '../../components/sections/first/third'
import Footer from '../../components/footer/footer'
import Slider from '../../components/sections/first/slider'

function Home() {
    return (
       <>
            <section>
                <Hero/>
            </section>
            <First img={vanila} heading={'Tasty and Nice Creams'} shade={"SHOP"} detail={'Here at Pick n Pay we take pride in the quality of the meat used for each and every burger. If it’s not perfect and grilled just the way you ordered it, we won’t send it out.  We guarantee the burger delivered to your table is the best burger you could have ordered.'}/>
            <Second img={filter} heading={'Tasty and Nice Creams'} shade={"ALONG"} detail={'Here at Pick n Pay we take pride in the quality of the meat used for each and every burger. If it’s not perfect and grilled just the way you ordered it, we won’t send it out.  We guarantee the burger delivered to your table is the best burger you could have ordered.'}/>
            
            <br />
            <Slider/>
           <Third/>
          
            
           <First img={vanila} heading={'Tasty and Nice Creams'} shade={"WITH"} detail={'Here at Pick n Pay we take pride in the quality of the meat used for each and every burger. If it’s not perfect and grilled just the way you ordered it, we won’t send it out.  We guarantee the burger delivered to your table is the best burger you could have ordered.'}/>
            <Footer/>
        
        </>
    )
}

export default Home
