import Button from "./Button";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

function ContactHome() {
  return (
    <>
      <motion.div
        className="flex max-lg:flex-col items-center pt-32 lg:pt-56 max-lg:pb-10 lg:pb-36 px-4 lg:px-16"
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
              <span className="text-[#2EB2D3]">Contact</span> Me
            </h1>
            <h1>To Help You For Your Business</h1>
          </div>
          <p className="text-white text-opacity-50">
            If you&apos;re looking for a reliable and skilled web developer to
            bring your ideas to life and create impactful, custom web solutions,
            feel free to reach out. I’m here to help you turn your vision into
            reality with quality, efficiency, and attention to detail
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

export default ContactHome;
