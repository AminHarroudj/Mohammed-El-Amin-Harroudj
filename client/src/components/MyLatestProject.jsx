import { useState } from "react";
import AllProjects from "./AllProjects";
import FrontendProjects from "./FrontendProjects";
import BackendProjects from "./BackendProjects";
import Button from "./Button";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

function MyLatestProject() {
  const [visibleDiv, setVisibleDiv] = useState(1);

  const handleButtonClick = (divId) => {
    setVisibleDiv(divId);
  };

  return (
    <>
      <motion.div className="px-4 lg:px-16 py-16 lg:py-32 flex flex-col gap-6 lg:gap-10 bg-[#2EB2D3] bg-opacity-10">
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
            My <span className="text-[#2EB2D3]">Latest</span> Projects
          </h1>
          <p className="text-white text-opacity-50">
            Here, I present a selection of my projects that highlight my ability
            to transform ideas into functional, visually appealing, and
            user-centric web solutions
          </p>
        </motion.div>
        <motion.div
          className="flex gap-2 lg:gap-10 justify-center items-center"
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
          <button
            className={`${
              visibleDiv === 1 ? "bg-[#2EB2D3]" : ""
            } py-2 px-4 lg:px-8 rounded-full hover:text-[white] hover:bg-[#2EB2D3] border-2 border-[#2EB2D3] hover:border-2 hover:border-[#2EB2D3] hover:scale-110 duration-200`}
            onClick={() => {
              handleButtonClick(1);
            }}
          >
            All
          </button>
          <button
            className={`${
              visibleDiv === 2 ? "bg-[#2EB2D3]" : ""
            } py-2 px-4 lg:px-8 rounded-full hover:text-[white] hover:bg-[#2EB2D3] border-2 border-[#2EB2D3] hover:border-2 hover:border-[#2EB2D3] hover:scale-110 duration-200`}
            onClick={() => {
              handleButtonClick(2);
            }}
          >
            Frontend
          </button>
          <button
            className={`${
              visibleDiv === 3 ? "bg-[#2EB2D3]" : ""
            } py-2 px-4 lg:px-8 rounded-full hover:text-[white] hover:bg-[#2EB2D3] border-2 border-[#2EB2D3] hover:border-2 hover:border-[#2EB2D3] hover:scale-110 duration-200`}
            onClick={() => {
              handleButtonClick(3);
            }}
          >
            Backend
          </button>
        </motion.div>
        <motion.div>
          {visibleDiv === 1 && (
            <div>
              <AllProjects />
              <div className="flex items-center justify-center mt-10">
                <Link to={"/portfolio"}>
                  <Button title={"See More Projects"} />
                </Link>
              </div>
            </div>
          )}
          {visibleDiv === 2 && (
            <div>
              <FrontendProjects />
              <div className="flex items-center justify-center mt-10">
                <Link to={"/portfolio"}>
                  <Button title={"See More Projects"} />
                </Link>
              </div>
            </div>
          )}
          {visibleDiv === 3 && (
            <div>
              <BackendProjects />
              <div className="flex items-center justify-center mt-10">
                <Link to={"/portfolio"}>
                  <Button title={"See More Projects"} />
                </Link>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </>
  );
}

export default MyLatestProject;
