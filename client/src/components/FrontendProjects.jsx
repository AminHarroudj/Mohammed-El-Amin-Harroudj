import ProjectCard from "./ProjectCard";
import adwaveMockup from "../assets/adwaveMockup.png";
import portfolioMockup from "../assets/portfolioMockup.png";
import { motion } from "motion/react";

function FrontendProjects() {
  return (
    <>
      <motion.div
        initial={{
          y: +50,
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
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div>
            <ProjectCard
              imgSource={adwaveMockup}
              title={"Adwave Website"}
              description={
                "Frontend project for an algerian entreprise of digital marketing"
              }
              livepreview={"https://adwave.agency/"}
            />
          </div>
          <div className="lg:pt-10">
            <ProjectCard
              imgSource={portfolioMockup}
              title={"My Portfolio"}
              description={
                "Frontend project for an algerian entreprise of digital marketing"
              }
              livepreview={"https://mohammed-el-amin-harroudj.vercel.app/"}
            />
          </div>
          <div className="lg:pt-10"></div>
        </div>
      </motion.div>
    </>
  );
}

export default FrontendProjects;
