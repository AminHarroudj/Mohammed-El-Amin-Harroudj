import myImg from "../assets/portfolioImg3.png";
import Button from "../components/Button";

function Introduce() {
  return (
    <>
      <div className="flex max-lg:flex-col-reverse items-center pt-32 max-lg:pb-10 px-4 lg:px-16 gap-10 lg:gap-20 bg-[#2EB2D3] bg-opacity-10 lg:h-screen">
        <div className="flex flex-col gap-6 lg:gap-10 max-lg:text-center lg:w-3/4">
          <div className="text-4xl lg:text-6xl font-medium flex flex-col gap-4">
            <h1>
              I'M <span className="text-[#2EB2D3]">WEB DEVELOPER</span>
            </h1>
            <h1 className="leading-tight">MOHAMMED EL AMIN HARROUDJ</h1>
          </div>
          <p className="text-white text-opacity-50">
            I'm a passionate web developer with a keen eye for design and a love
            for crafting user-friendly experiences. With a strong foundation in
            HTML, CSS, and JavaScript, I've honed my skills in building
            responsive and interactive websites. I'm excited about the potential
            of web technologies to create innovative solutions and solve
            real-world problems
          </p>
          <div className="flex max-lg:flex-col gap-6">
            <button className="text-[#2EB2D3] py-3 px-10 rounded-full border-2 border-[#2EB2D3] hover:text-white hover:bg-[#2EB2D3] hover:scale-105 duration-200">
              Explore Services
            </button>
            <Button title={"Demande Free Consultation"} />
          </div>
        </div>
        <div>
          <img src={myImg} alt="" className="w-[300px] lg:w-[510px] max-lg:border-4 max-lg:rounded-full max-lg:px-10 max-lg:border-[#2EB2D3] max-lg:bg-[#2EB2D3] max-lg:bg-opacity-20" />
        </div>
      </div>
    </>
  );
}

export default Introduce;
