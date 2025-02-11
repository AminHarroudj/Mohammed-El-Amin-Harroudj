import Button from "./Button";
import { Link } from "react-router-dom";

function ServicesHome() {
  return (
    <>
      <div className="flex max-lg:flex-col items-center pt-32 lg:pt-56 px-4 lg:px-16 max-lg:pb-10 lg:pb-20">
        <div className="flex flex-col gap-6 lg:gap-10 text-center items-center">
          <div className="text-4xl lg:text-6xl font-medium flex flex-col gap-4 text-secondary">
            <h1>
              My All <span className="text-primary">Services</span>
            </h1>
            <h1>For Web Development</h1>
          </div>
          <p className="text-black text-opacity-50">
            Looking to bring your web project to life? I&apos;m here to help. My web
            development skills transform ideas into reality. I&apos;m known for
            delivering projects on time and within budget. My clients appreciate
            my meticulous attention to detail, creativity, and commitment to
            excellence.
          </p>
          <div>
            <Link to={"/contact"}>
              <Button title={"Demande Free Consultation"} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicesHome;
