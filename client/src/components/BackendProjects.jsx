import { motion } from "motion/react";
import ProjectCard from "./ProjectCard";
import goatstoreImg from "../assets/goatstore.png";

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
            <div>
              <ProjectCard
                imgSource={goatstoreImg}
                title={"E-commerce Website"}
                description={
                  "E-commerce website for an algerian entreprise of sport clouths"
                }
                livepreview={"https://goat-store-brown.vercel.app/"}
              />
            </div>
          </div>
          <div className="lg:pt-10"></div>
        </div>
      </motion.div>
    </>
  );
}

export default BackendProjects;
