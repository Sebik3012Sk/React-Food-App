import React from 'react';
import NavBar from '../components/NavBar';
import HeaderText from '../components/HeaderText';
import MainButton from '../components/MainButton';
import bg_image from "../images/bg-image.jpg";

const Home = () => {

  return (
    <div>
        <div style={{background : `url(${bg_image})`,width : "100%",height : "550px",backgroundRepeat : "no-repeat",backgroundAttachment : "fixed",backgroundPosition : "center"}}>
            <NavBar />

            <div className="flex justify-center items-center content-center">
              <HeaderText font_weight={`font-semibold`} headerText="React Food App" color="white" underline={false} />
              <MainButton id={1} buttonText="All Recipes" />
            </div>

        </div>


    </div>

  )
}

export default Home;