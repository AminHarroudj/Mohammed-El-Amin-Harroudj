import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import bg from "../../assets/bg.svg";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import tailwind from "../../assets/tailwind.svg";
import javascript from "../../assets/javascript.svg";
import react from "../../assets/react.svg";
import nodejs from "../../assets/nodejs.svg";
import php from "../../assets/php.svg";
import laravel from "../../assets/laravel.svg";
import mysql from "../../assets/mysql.svg";
import mongo from "../../assets/mongo.svg";
import git from "../../assets/git.svg";
import github from "../../assets/github.svg";
import wordpress from "../../assets/wordpress.svg";
import docker from "../../assets/docker.svg";

function Skills() {
  const technologies = [
    { id: 1, title: "HTML", icon: html, color: "#e44d26" },
    { id: 2, title: "CSS", icon: css, color: "#1172b8" },
    { id: 3, title: "Tailwind CSS", icon: tailwind, color: "#44a8b3" },
    { id: 4, title: "Javascript", icon: javascript, color: "#f7df1e" },
    { id: 5, title: "React JS", icon: react, color: "#00d8ff" },
    { id: 6, title: "Node | Express", icon: nodejs, color: "#6bbf47" },
    { id: 7, title: "PHP", icon: php, color: "#8892bf" },
    { id: 8, title: "Laravel", icon: laravel, color: "#ff2d20" },
    { id: 9, title: "My SQL", icon: mysql, color: "#f8981d" },
    { id: 10, title: "Mongo DB", icon: mongo, color: "#54ab4e" },
    { id: 11, title: "Git", icon: git, color: "#ee513b" },
    { id: 12, title: "GitHub", icon: github, color: "#ffffff" },
    { id: 13, title: "Wordpress", icon: wordpress, color: "#00759d" },
    { id: 14, title: "Docker", icon: docker, color: "#2396ed" },
  ];

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
      <main className="flex-grow mt-10 lg:mt-0 mb-10 lg:mb-0 z-10 flex flex-col gap-10">
        <div className="flex flex-col items-center text-center gap-2">
          <h1 className="text-3xl lg:text-5xl font-bold">
            My <span className="text-primary">Skills</span>
          </h1>
          <p className="sm:text-lg text-white/50">
            What I use to build clean, functional, and impactful digital
            products
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-10">
          {technologies.map((technologie, index) => (
            <motion.div
              key={technologie.id}
              style={{
                border: `1px solid ${technologie.color}`,
                boxShadow: `0 0 15px ${technologie.color}`,
              }}
              className={`h-40 w-40 rounded-3xl bg-background1 flex flex-col gap-2 justify-center items-center p-2 transition-transform hover:scale-105 cursor-pointer`}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              <img
                src={technologie.icon}
                alt={technologie.title}
                loading="lazy"
                className="w-[60%]"
              />
              <h1 className="text-lg text-center">{technologie.title}</h1>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </motion.div>
  );
}

export default Skills;
