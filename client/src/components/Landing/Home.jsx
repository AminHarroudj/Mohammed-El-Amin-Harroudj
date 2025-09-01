import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import bg from "../../assets/bg.svg";
import profile from "../../assets/img.webp";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const getTouchClick = () => {
    navigate("/contact");
  };

  const showWorksClick = () => {
    navigate("/works");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-gradient-to-b from-background1 to-background2 text-white px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 flex flex-col overflow-auto"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={bg}
          alt="background"
          loading="lazy"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <Navbar />
      <main className="flex-grow mt-10 lg:mt-0 mb-10 lg:mb-0 z-10 flex flex-col-reverse lg:flex-row items-center justify-center gap-10">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-4 text-center lg:text-start">
          <h1 className="text-3xl lg:text-6xl font-bold leading-tight">
            From Concept To <span className="text-secondary">Code</span>
            <br />
            Full Stack <span className="text-primary">Developer</span>
          </h1>
          <p className="text-white/50 text-lg">
            As a Full Stack Developer, I bring concepts to life through clean
            code and thoughtful design. Whether it's crafting intuitive user
            interfaces or building powerful backend systems, I focus on creating
            web experiences that are fast, functional, and impactful.
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-4">
            <button
              onClick={getTouchClick}
              className="bg-primary text-lg font-medium rounded-full border-2 border-primary cursor-pointer py-2 px-8 w-60 transition-transform hover:scale-95"
            >
              Get In Touch
            </button>
            <button
              onClick={showWorksClick}
              className="bg-secondary text-lg font-medium rounded-full border-2 border-secondary cursor-pointer py-2 px-8 w-60 transition-transform hover:scale-95"
            >
              Show My Works
            </button>
          </div>
        </div>
        <div className="relative flex items-center justify-center w-full lg:w-1/2 h-96">
          <div className="absolute inset-0 bg-primary rounded-full blur-3xl opacity-50 z-0"></div>
          <img
            src={profile}
            alt="Profile Image"
            loading="lazy"
            className="z-10 w-full max-w-sm lg:max-w-lg"
          />
        </div>
      </main>
      <Footer />
    </motion.div>
  );
}

export default Home;
