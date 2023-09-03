import React from 'react';
import NavBar from '../components/NavBar';
import HeaderText from '../components/HeaderText';
import bg_image from "../images/bg-image.jpg";


const Home = () => {

  return (
    <div>
        <div style={{background : `url(${bg_image})`,width : "100%",height : "550px",backgroundRepeat : "no-repeat",backgroundAttachment : "fixed",backgroundPosition : "center"}}>
            <NavBar />

            <div className="flex justify-center items-center content-center">
              <div className="mt-24">
                  <HeaderText font_weight={"font-semibold"} size="3xl" headerText="Mnamky Mého Tatky" color="white" underline={false} />
              </div>
            </div>            

        </div>

        

    </div>

  )
}

export default Home;