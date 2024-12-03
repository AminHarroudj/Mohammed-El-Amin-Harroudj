import Button from "./Button";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

function PortfolioHome() {
  return (
    <>
      <motion.div
        className="flex max-lg:flex-col items-center pt-32 lg:pt-56 max-lg:pb-10 lg:pb-36 px-4 lg:px-16 bg-[#2EB2D3] bg-opacity-10 "
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
              My <span className="text-[#2EB2D3]">Portfolio</span>
            </h1>
            <h1>Scroll To See My Projects</h1>
          </div>
          <p className="text-white text-opacity-50">
            Here, you can explore a diverse selection of my projects that
            showcase my expertise in both frontend and backend development. Each
            project reflects my ability to create innovative, user-friendly web
            applications that solve real-world problems
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

export default PortfolioHome;
