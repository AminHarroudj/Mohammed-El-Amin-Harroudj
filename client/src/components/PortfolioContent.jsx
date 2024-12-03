import AllProjects from "../components/AllProjects";
import Button from "./Button";
import { motion } from "motion/react";

function PortfolioContent() {
  return (
    <>
      <div className="px-4 lg:px-16 pt-16 lg:pt-32 flex flex-col items-center gap-6 lg:gap-10">
        <motion.div
          className="flex flex-col gap-6 lg:gap-10 justify-center items-center text-center"
          initial={{
            y: -50,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
        >
          <h1 className="text-4xl lg:text-5xl font-medium">
            All My <span className="text-[#2EB2D3]">Projects</span>
          </h1>
          <p className="text-white text-opacity-50">
            Greeting, fellow digital explorers! I am Mohammed , a passionate
            developer
          </p>
        </motion.div>
        <div>
          <AllProjects />
        </div>
        <Button title={"Demand Free Consultation"} />
      </div>
    </>
  );
}

export default PortfolioContent;
