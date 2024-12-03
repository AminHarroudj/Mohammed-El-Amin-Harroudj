import ProjectCard from "./ProjectCard";
import { motion } from "motion/react";
import basmaMockup from "../assets/basmaMockup.png";

function BackendProjects() {
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
              imgSource={basmaMockup}
              title={"Club Basma"}
              description={
                "Frontend project for an algerian entreprise of digital marketing"
              }
              github={"https://github.com/AminHarroudj/Club-Basma"}
              livepreview={"https://club-basma.vercel.app/"}
            />
          </div>
          <div className="lg:pt-10"></div>
          <div></div>
          <div className="lg:pt-10"></div>
        </div>
      </motion.div>
    </>
  );
}

export default BackendProjects;
