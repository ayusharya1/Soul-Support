import React from 'react'; 
import {HashLink} from "react-router-hash-link";

const Header = () => {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}
  
  return (
    <nav>
        <h1>Soul Support</h1>
        <main>
            <HashLink to = {"/#home"}>Home</HashLink>
            <HashLink to = {"https://psychology.feedspot.com/mental_health_blogs/"} target='_blank'>Blogs</HashLink> 
            <HashLink to = {"/calling"} target='_blank'>Virtual Calling</HashLink>
            <HashLink to = {"/quiz"}>Your Score</HashLink>
            <HashLink to = {"/#services"} scroll={el => scrollWithOffset(el)}>Services</HashLink>
            <HashLink to = {"/#team"} scroll={el => scrollWithOffset(el)}>Team</HashLink>
            <HashLink to = {"/contact"}>Contact</HashLink> 
            <HashLink id='login' to = {"/login"}>Login</HashLink>
        </main>
    </nav>
  )
}

export default Header
