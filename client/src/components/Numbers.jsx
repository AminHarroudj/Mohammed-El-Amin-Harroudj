import { motion } from "motion/react";

function Numbers() {
  return (
    <>
      <motion.div
        className="bg-[#2EB2D3] bg-opacity-10 px-2 lg:px-16 grid grid-cols-2 lg:grid-cols-4 max-lg:gap-6 items-center justify-center text-center py-16"
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
        <motion.div className="flex flex-col gap-4">
          <h1 className="text-6xl font-medium">1+</h1>
          <p>Years Experience</p>
        </motion.div>
        <motion.div className="flex flex-col gap-4">
          <h1 className="text-6xl font-medium">1+</h1>
          <p>Project Complite</p>
        </motion.div>
        <motion.div className="flex flex-col gap-4">
          <h1 className="text-6xl font-medium">1+</h1>
          <p>Happy Clients</p>
        </motion.div>
        <motion.div className="flex flex-col gap-4">
          <h1 className="text-6xl font-medium">2+</h1>
          <p>Award Winner</p>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Numbers;
