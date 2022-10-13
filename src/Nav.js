import React, { useState,useEffect } from 'react';
import './Nav.css';

function Nav() {
  const[show, handleShow] =useState(false);

const transitionNavBar = () => {
  if (window.scrollY>100){
  handleShow(true);
  }else handleShow(false);
}  

 useEffect(() => {
   window.addEventListener("scroll", transitionNavBar);
 
   return () => {
     window.removeEventListener('scroll', transitionNavBar)
   }
 }, [])
 
  return (
    <div className={`nav ${show && "nav_black"}`}>
        <div className="nav_contents">
        <img 
        className='nav_logo'
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt='logo'/>
        

        <img 
        className='nav_avatar'
        src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/e70b1333850498.56ba69ac32ae3.png' alt='avatar'/>

        </div>
       
    </div>
  )
}

export default Nav