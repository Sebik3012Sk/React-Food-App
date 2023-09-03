import React from 'react'
import Navbar from '../components/NavBar';
import bg_image from "../images/bg-image.jpg";

const MainFood = () => {
  return (
    <div style={{background : `url(${bg_image})`,width : "100%",height : "100%",backgroundRepeat : "no-repeat",backgroundAttachment : "fixed",backgroundPosition : "center"}}>
        <Navbar />
    </div>
  )
}

export default MainFood;