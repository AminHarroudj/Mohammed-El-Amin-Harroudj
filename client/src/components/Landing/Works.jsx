import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import bg from "../../assets/bg.svg";
import { FaEye } from "react-icons/fa";
import react from "../../assets/react.svg";
import tailwind from "../../assets/tailwind.svg";
import nodejs from "../../assets/nodejs.svg";
import mongo from "../../assets/mongo.svg";
import wordpress from "../../assets/wordpress.svg";
import { IoClose } from "react-icons/io5";
import { RiShareBoxFill } from "react-icons/ri";
import apl1 from "../../assets/apl1.png";
import apl2 from "../../assets/apl2.png";
import apl3 from "../../assets/apl3.png";
import apl4 from "../../assets/apl4.png";
import apl5 from "../../assets/apl5.png";

import goat1 from "../../assets/goat1.png";
import goat2 from "../../assets/goat2.png";
import goat3 from "../../assets/goat3.png";
import goat4 from "../../assets/goat4.png";
import goat5 from "../../assets/goat5.png";

import wsc1 from "../../assets/wsc1.png";
import wsc2 from "../../assets/wsc2.png";
import wsc3 from "../../assets/wsc3.png";
import wsc4 from "../../assets/wsc4.png";
import wsc5 from "../../assets/wsc5.png";

function Works() {
  const projects = [
    {
      id: 1,
      title: "GOAT STORE DZ",
      details:
        "An e-commerce platform dedicated to high-quality football clothing, designed with a modern, responsive interface. Features include a visually engaging landing page for product showcases and a fully functional admin dashboard for product, order, and inventory management. Built with React and Tailwind CSS on the front end, and Node.js/Express.js with MongoDB on the back end, ensuring fast performance and scalability.",
      technologies: [
        { title: "React JS", icon: react },
        { title: "Tailwind CSS", icon: tailwind },
        { title: "Node JS / Express JS", icon: nodejs },
        { title: "Mongo DB", icon: mongo },
      ],
      imgs: [goat1, goat2, goat3, goat4, goat5],
      live: "https://goat-store-dz.com",
    },
    {
      id: 2,
      title: "APL TECH DZ",
      details:
        "A complete e-commerce solution for PC components and custom PC building. The platform combines a sleek landing page with an admin dashboard for managing products, custom builds, and orders. Developed with React and Tailwind CSS for a smooth user experience, and powered by Node.js/Express.js and MongoDB for robust backend operations.",
      technologies: [
        { title: "React JS", icon: react },
        { title: "Tailwind CSS", icon: tailwind },
        { title: "Node JS / Express JS", icon: nodejs },
        { title: "Mongo DB", icon: mongo },
      ],
      imgs: [apl1, apl2, apl3, apl4, apl5],
      live: "https://apltech.dz",
    },
    {
      id: 3,
      title: "WORLDSPEAK CLASS",
      details:
        "A professional website for an English language institute, offering online registration for students and a secure certificate verification system for graduates. Developed on WordPress to allow easy content management while maintaining a professional and responsive design, optimized for both desktop and mobile users.",
      technologies: [{ title: "WordPress", icon: wordpress }],
      imgs: [wsc1, wsc2, wsc3, wsc4, wsc5],
      live: "https://worldspeakclass.com",
    },
  ];

  const [selectedId, setSelectedId] = useState(null);
  const selectedProject = projects.find((project) => project.id === selectedId);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
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
      <main className="flex-grow mt-10 lg:mt-0 mb-10 z-10 flex flex-col gap-10">
        <div className="flex flex-col items-center text-center gap-2">
          <h1 className="text-3xl lg:text-5xl font-bold">
            My <span className="text-primary">Works</span>
          </h1>
          <p className="sm:text-lg text-white/50">
            Real-world projects that combine functionality, design, and
            performance
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              layoutId={project.id.toString()}
              onClick={() => setSelectedId(project.id)}
              className="w-full group relative aspect-video rounded-xl border-2 border-primary shadow-[0_0_15px_#2962FF] overflow-hidden cursor-pointer"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              <img
                src={project.imgs[0]}
                alt={project.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full transition-transform duration-300 object-cover group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background1 to-transparent"></div>
              <div className="absolute inset-0 flex items-end p-4">
                <h1 className="text-xl font-medium">{project.title}</h1>
              </div>
              <div className="absolute inset-0 bg-background1/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                <button
                  type="button"
                  className="py-2 px-4 rounded-full border-2 flex items-center gap-2 cursor-pointer"
                >
                  <FaEye /> Show The Project
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      <AnimatePresence>
        {selectedId && selectedProject && (
          <motion.div
            className="fixed inset-0 bg-background1/60 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              style={{
                overflowY: "scroll",
                scrollbarWidth: "none", // Firefox
                msOverflowStyle: "none", // IE 10+
              }}
              layoutId={selectedId.toString()}
              className="relative w-full max-w-4xl max-h-[600px] overflow-y-scroll bg-gradient-to-tl from-background1 to-background2 rounded-2xl border-2 border-primary shadow-[0_0_15px_#2962FF]"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <div className="relative flex flex-col gap-4 p-4 lg:px-10 lg:py-6">
                <IoClose
                  onClick={() => setSelectedId(null)}
                  className="absolute top-4 right-4 lg:top-6 lg:right-10 text-3xl text-white/50 hover:text-white/100 transition-colors cursor-pointer"
                />
                <div className="flex flex-col gap-2 items-start">
                  <h1 className="text-2xl font-semibold">
                    {selectedProject.title}
                  </h1>
                  <p className="text-white/50">{selectedProject.details}</p>
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    className="py-2 px-6 rounded-full bg-primary hover:scale-105 transition-transform flex items-center gap-2"
                  >
                    <RiShareBoxFill className="text-xl" /> Live Demo
                  </a>
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-xl font-medium">Used Technologies</h1>
                  <div className="flex flex-wrap items-center gap-4">
                    {selectedProject.technologies.map((tech, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 px-4 py-1 rounded-full bg-primary/20 hover:bg-primary/50 transition-colors cursor-pointer"
                      >
                        <img
                          src={tech.icon}
                          alt={tech.title}
                          loading="lazy"
                          className="w-6 h-6 object-contain"
                        />
                        <p>{tech.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-xl font-medium">Project Images</h1>
                  <div className="grid grid-cols-1 gap-6">
                    {selectedProject.imgs.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={selectedProject.title}
                        className="w-full object-contain rounded-lg"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </motion.div>
  );
}

export default Works;
