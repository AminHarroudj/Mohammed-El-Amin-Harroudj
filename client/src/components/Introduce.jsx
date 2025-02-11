import myImg from "../assets/myImg.jpg";
import Button from "../components/Button";
import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";

function Introduce() {
  return (
    <>
      <div className="flex max-lg:flex-col-reverse items-center pt-32 max-lg:pb-10 px-4 lg:px-16 gap-10 lg:gap-20 lg:h-screen">
        <div className="flex flex-col gap-6 lg:gap-10 max-lg:text-center lg:w-3/4">
          <div className="text-4xl lg:text-6xl font-medium flex flex-col gap-4">
            <ReactTyped
              strings={["I'M WEB DEVELOPER"]}
              typeSpeed={40}
              backSpeed={50}
              loop
            >
              <span className="text-primary"></span>
            </ReactTyped>
            <h1 className="leading-tight text-secondary">MOHAMMED EL AMIN HARROUDJ</h1>
          </div>
          <p className="text-black text-opacity-50">
            I&apos;m a passionate web developer with a keen eye for design and a
            love for crafting user-friendly experiences. With a strong
            foundation in HTML, CSS, and JavaScript, I&apos;ve honed my skills
            in building responsive and interactive websites. I&apos;m excited
            about the potential of web technologies to create innovative
            solutions and solve real-world problems
          </p>
          <div className="flex max-lg:flex-col gap-6">
            <Link to={"/services"}>
              <button className="text-primary py-3 px-10 rounded-full border-2 border-primary hover:text-white hover:bg-primary hover:scale-105 duration-200">
                Explore Services
              </button>
            </Link>
            <Link to={"/contact"}>
              <Button title={"Demande Free Consultation"} />
            </Link>
          </div>
        </div>
        <div className="lg:w-1/3">
          <img src={myImg} alt="" className="rounded-full"/>
        </div>
      </div>
    </>
  );
}

export default Introduce;
