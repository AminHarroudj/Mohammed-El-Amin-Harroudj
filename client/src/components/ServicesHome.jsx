import Button from "./Button";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

function ServicesHome() {
  return (
    <>
      <motion.div
        className="flex max-lg:flex-col items-center pt-32 lg:pt-56 px-4 lg:px-16 max-lg:pb-10 lg:pb-36"
        initial={{
          y: -50,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <div className="flex flex-col gap-6 lg:gap-10 text-center items-center">
          <div className="text-4xl lg:text-6xl font-medium flex flex-col gap-4">
            <h1>
              My All <span className="text-[#2EB2D3]">Services</span>
            </h1>
            <h1>For Web Development</h1>
          </div>
          <p className="text-white text-opacity-50">
            Looking to bring your web project to life? I'm here to help. My web
            development skills transform ideas into reality. I'm known for
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
      </motion.div>
    </>
  );
}

export default ServicesHome;
