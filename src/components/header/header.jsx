import React,{useState } from 'react'
import {Container} from 'reactstrap'
import {FaHamburger} from 'react-icons/fa'
import './header.css'
function Header() {
    const [hide, setHide]=useState('')
    const [open, setOpen]=useState('')
    return (
       <>
        <div className="top" >
        <header >
            <span className="logo">
                <img src="https://picknpayng.com/pnpx/wp-content/uploads/2019/10/onlineshopping_logo.png" alt="" loading='lazy'/>
            </span>

            <nav className='desktop-hide'>
                <ul>
                    <li>Home</li>
                    <li>about</li>
                   
                     <li> Contact us </li>
                    <li onClick={()=>setOpen('35vh')} ><FaHamburger/></li>
                </ul>
            </nav>

            <h5 onClick={()=>setOpen('100%')} className='burger-open'><FaHamburger/></h5>
            
        </header>

        
        </div>

        <div className="sidebar" >
            
          <div className="side" style={{height:open}}>
            
            <span className='cancel' onClick={()=> setOpen('0px')}>&times;</span>
            <div className="div inner">
             <ul>
             
                   <li> Home </li>
                   <li> About Pick n Pay  </li>
                   <li> Contact us </li>
               </ul>
            </div>
          </div>
        </div>
       </>
    )
}

export default Header
