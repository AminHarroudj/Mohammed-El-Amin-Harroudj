import { React, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import bg from "../../assets/bg.svg";
import pub from "../../assets/pub.png";
import { FaEye } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import tailwind from "../../assets/tailwind.svg";
import git from "../../assets/git.svg";
import github from "../../assets/github.svg";
import javascript from "../../assets/javascript.svg";
import cpanel from "../../assets/cpanel.svg";
import vercel from "../../assets/vercel.svg";

function Courses() {
  const courses = [
    {
      id: 1,
      title: "Frontend Course",
      price: 8000,
      details:
        "Start your journey to becoming a web developer from scratch! In this hands-on course, you'll learn HTML, CSS, Tailwind CSS, Git & GitHub, and JavaScript step by step, with live Google Meet sessions for revision and practical application. By the end, you'll build a complete project and get it evaluated with the instructor",
      level: "Beginner",
      time: "15 Hours",
      skills: [
        { title: "HTML", icon: html },
        { title: "CSS", icon: css },
        { title: "Tailwind CSS", icon: tailwind },
        { title: "Git", icon: git },
        { title: "GitHub", icon: github },
        { title: "JavaScript", icon: javascript },
        { title: "Vercel", icon: vercel },
        { title: "cPanel", icon: cpanel },
      ],
      chapters: [
        {
          id: 1,
          title: "Introduction + HTML",
          lessons: [
            "Live Session For Introduce The Course ( Google Meet )",
            "Introduction To Web Development + Setup Environment",
            "HTML Structure + Principle Tags",
            "HTML Forms & Tables",
            "Live Session For Revision ( Google Meet )",
          ],
        },
        {
          id: 2,
          title: "CSS & Tailwind CSS",
          lessons: [
            "CSS Basic & Styling",
            "CSS Flexbox & Grid",
            "Live Session For Evaluating Projects ( Google Meet )",
            "CSS Media Queries & Responsinve Design",
            "Live Session For Evaluating Projects ( Google Meet )",
            "Tailwind CSS",
            "Live Session For Revision ( Google Meet )",
          ],
        },
        {
          id: 3,
          title: "Git & GitHub",
          lessons: [
            "Setup Git In Computer & Create GitHub Account & Push A Project To GitHub",
            "Live Session For Revision ( Google Meet )",
          ],
        },
        {
          id: 4,
          title: "JavaScript",
          lessons: [
            "JavaScript & Algorithms Basics",
            "Javascript Conditions",
            "Javascript Loops",
            "Live Session For Revision ( Google Meet )",
            "Javascript Functions",
            "Live Session For Revision ( Google Meet )",
            "Javascript Arrays",
            "Javascript Objects",
            "Live Session For Revision ( Google Meet )",
            "Javascript DOM",
            "JavaScript DOM Manipulation",
            "Javascript Events",
            "Live Session For Revision ( Google Meet )",
            "Javascript Asynchronous",
            "Live Session For Revision ( Google Meet )",
            "Javascript Local Storage",
            "Javascript Navbar Best Practice",
            "Live Session For Revision ( Google Meet )",
            "Javascript API Fetch",
            "JavaScript API Axios",
            "Live Session For Revision ( Google Meet )",
          ],
        },
        {
          id: 5,
          title: "Hosting",
          lessons: [
            "Free Hosting",
            "Payed Hosting",
            "Live Session For Final Project ( Google Meet )",
            "Live Session For Evaluating Projects ( Google Meet )",
          ],
        },
      ],
      img: pub,
    },
  ];

  const [selectedId, setSelectedId] = useState(null);
  const selectedCourse = courses.find((course) => course.id === selectedId);

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
            My <span className="text-primary">Courses</span>
          </h1>
          <p className="sm:text-lg text-white/50">
            Courses tailored for beginners and intermediates, with a strong
            focus on building projects and learning by doing
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              layoutId={course.id.toString()}
              onClick={() => setSelectedId(course.id)}
              className="w-full group relative aspect-[3/4] rounded-xl border-2 border-primary shadow-[0_0_15px_#2962FF] overflow-hidden cursor-pointer"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              <img
                src={course.img}
                alt={course.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full transition-transform duration-300 object-cover group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background1 to-transparent"></div>
              <div className="absolute inset-0 flex items-end p-4 w-full">
                <div className="flex items-center justify-between w-full">
                  <h1 className="text-xl font-medium">{course.title}</h1>
                  <h1 className="text-xl text-secondary font-medium">
                    {course.price} DZD
                  </h1>
                </div>
              </div>
              <div className="absolute inset-0 bg-background1/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                <button
                  type="button"
                  className="py-2 px-4 rounded-full border-2 flex items-center gap-2 cursor-pointer"
                >
                  <FaEye /> Show The Course Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      <AnimatePresence>
        {selectedId && selectedCourse && (
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
                scrollbarWidth: "none",
                msOverflowStyle: "none",
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
                    {selectedCourse.title}
                  </h1>
                  <h1 className="text-2xl text-secondary font-semibold">
                    {selectedCourse.price} DZD
                  </h1>
                  <p className="text-white/50">{selectedCourse.details}</p>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-xl font-medium">Level</h2>
                  <p className="text-lg text-white/50">
                    {selectedCourse.level}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-xl font-medium">
                    Skills you will acquire
                  </h2>
                  <div className="flex flex-wrap items-center gap-4">
                    {selectedCourse.skills.map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 px-4 py-1 rounded-full bg-primary/20 hover:bg-primary/50 transition-colors cursor-pointer"
                      >
                        <img
                          src={skill.icon}
                          alt={skill.title}
                          loading="lazy"
                          className="w-6 h-6 object-contain"
                        />
                        <p>{skill.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-xl font-medium">
                    Content of the Course of {selectedCourse.title}
                  </h2>
                  <div className="flex flex-col gap-2 text-lg">
                    {selectedCourse.chapters.map((chapter, index) => (
                      <div key={index}>
                        <h2 className="font-medium text-secondary">
                          {chapter.id} - {chapter.title} :
                        </h2>
                        <ul className="ml-10">
                          {chapter.lessons.map((lesson, index) => (
                            <li key={index} className="list-disc">
                              {lesson}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-center my-4">
                    <a
                      href="https://wa.me/213556648005"
                      target="_blank"
                      className="bg-primary text-xl font-medium py-2 px-10 rounded-full cursor-pointer"
                    >
                      Start Now
                    </a>
                  </div>
                  <img
                    src={selectedCourse.img}
                    alt={selectedCourse.title}
                    className="w-full object-contain rounded-lg"
                  />
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

export default Courses;
