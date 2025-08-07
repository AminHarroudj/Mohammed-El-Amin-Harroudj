import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import bg from "../../assets/bg.svg";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import contact from "../../assets/contact.svg";

function Contact() {
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
      <main className="flex-grow mt-10 lg:mt-0 mb-10 sm:mb-4 lg:mb-6 z-10 flex flex-col items-center justify-center">
        <div className="flex flex-col gap-6 w-full max-w-xl bg-background1 border-1 border-primary shadow-[0_0_5px_#2962FF] rounded-2xl p-4 cursor-pointer transition-all hover:shadow-[0_0_15px_#2962FF]">
          <div className="flex items-center justify-center">
            <img src={contact} alt="" className="w-40" />
          </div>
          <div className="flex items-center flex-col gap-2">
            <div className="w-14 h-14 flex items-center justify-center text-3xl bg-primary rounded-full">
              <IoMail />
            </div>
            <div className="flex flex-col text-center">
              <p className="text-xl font-semibold">My Email Address</p>
              <p className="text-lg text-white/50">
                amin.harroudj.2002@outlook.com
              </p>
            </div>
          </div>
          <div className="flex items-center flex-col gap-2">
            <div className="w-14 h-14 flex items-center justify-center text-3xl bg-primary rounded-full">
              <FaPhoneAlt />
            </div>
            <div className="flex flex-col text-center">
              <p className="text-xl font-semibold">My Phone Number</p>
              <p className="text-lg text-white/50">0556648005</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/harroudj-mohammed-el-amin-655315252/"
              target="_blank"
            >
              <FaLinkedin className="text-4xl transition-all hover:scale-105 hover:text-primary" />
            </a>
            <a href="https://github.com/AminHarroudj" target="_blank">
              <FaGithub className="text-4xl transition-all hover:scale-105 hover:text-primary" />
            </a>
            <a href="https://www.instagram.com/amin.harroudj/" target="_blank">
              <FaInstagram className="text-4xl transition-all hover:scale-105 hover:text-primary" />
            </a>
            <a href="https://wa.me/213556648005" target="_blank">
              <FaWhatsapp className="text-4xl transition-all hover:scale-105 hover:text-primary" />
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
}

export default Contact;
