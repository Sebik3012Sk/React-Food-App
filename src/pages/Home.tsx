import HeaderText from "../components/HeaderText";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      {/* <div
        style={{
          background: `url(${bg_image})`,
          width: "100%",
          height: "550px",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
      > */}
      <div className="bg-[url('/src/assets/bg-image.jpg')] w-full h-[550px] bg-no-repeat bg-fixed bg-top">
        <Navbar />

        <div className="flex justify-center items-center content-center">
          <div className="mt-24">
            <HeaderText
              font_weight={"font-semibold"}
              size="3xl"
              headerText="Mnamky Mého Tatky"
              color="white"
              underline={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
