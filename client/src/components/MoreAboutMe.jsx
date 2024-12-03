import MySkills from "./MySkills";
import SkillsInProgress from "./SkillsInProgress";
import Technologies from "./Technologies";
import { motion } from "motion/react";

function MoreAboutMe() {
  return (
    <>
      <motion.div className="px-4 lg:px-16 py-16 lg:py-32 flex flex-col gap-6 lg:gap-10">
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
            More <span className="text-[#2EB2D3]">About</span> Me
          </h1>
          <p className="text-white text-opacity-50">
            Here, I showcase my technical skills that demonstrate my expertise
            in building modern, user-focused web applications
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 pt-6">
          <motion.div
            initial={{
              x: -50,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
          >
            <MySkills />
          </motion.div>
          <motion.div
            className="grid grid-cols-1 max-lg:gap-10"
            initial={{
              x: 50,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
          >
            <Technologies />
            <SkillsInProgress />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default MoreAboutMe;
