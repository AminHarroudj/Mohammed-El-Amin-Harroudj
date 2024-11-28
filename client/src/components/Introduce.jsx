import myImg from "../assets/portfolioImg.png";
import Button from "../components/Button";

function Introduce() {
  return (
    <>
      <div className="flex max-lg:flex-col items-center pt-32 px-4 lg:px-16 gap-20 bg-[#2EB2D3] bg-opacity-10 lg:h-screen">
        <div className="flex flex-col gap-6 lg:gap-10 max-lg:text-center">
          <div className="text-4xl lg:text-6xl font-medium flex flex-col gap-4">
            <h1>
              I'M <span className="text-[#2EB2D3]">WEB DEVELOPER</span>
            </h1>
            <h1>MOHAMMED EL AMIN HARROUDJ</h1>
          </div>
          <p className="text-white text-opacity-50">
            Greetings, fellow digital explorers! I am Mohammed El Amin, a
            passionate and innovative developer dedicated to crafting immersive
            digital experiences. Welcome to my online abode
          </p>
          <div className="flex max-lg:flex-col gap-6">
            <button className="text-[#2EB2D3] py-3 px-10 rounded-full border-2 border-[#2EB2D3] hover:text-white hover:bg-[#2EB2D3] hover:scale-105 duration-200">
              Explore Services
            </button>
            <Button title={"Demande Free Consultation"} />
          </div>
        </div>
        <div>
          <img src={myImg} alt="" className="w-[600px]" />
        </div>
      </div>
    </>
  );
}

export default Introduce;
