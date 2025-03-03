import { useState } from "react";
import FrontendProjects from "./FrontendProjects";
import BackendProjects from "./BackendProjects";
import Button from "./Button";
import { Link } from "react-router-dom";
import HomeProjects from "./HomeProjects";

function MyLatestProject() {
  const [visibleDiv, setVisibleDiv] = useState(1);

  const handleButtonClick = (divId) => {
    setVisibleDiv(divId);
  };

  return (
    <>
      <div className="px-4 lg:px-16 py-16 lg:py-20 flex flex-col gap-6 lg:gap-10">
        <div className="flex flex-col gap-6 lg:gap-10 justify-center items-center text-center">
          <h1 className="text-4xl lg:text-5xl font-medium text-secondary">
            My Latest <span className="text-primary">Projects</span>
          </h1>
          <p className="text-black text-opacity-50">
            Here, I present a selection of my projects that highlight my ability
            to transform ideas into functional, visually appealing, and
            user-centric web solutions
          </p>
        </div>
        <div className="flex gap-2 lg:gap-10 justify-center items-center">
          <button
            className={`${
              visibleDiv === 1 ? "bg-primary text-white" : "text-primary"
            } py-2 px-4 lg:px-8 rounded-full hover:text-[white] hover:bg-primary border-2 border-primary hover:border-2 hover:border-[#2EB2D3] hover:scale-110 duration-200`}
            onClick={() => {
              handleButtonClick(1);
            }}
          >
            All
          </button>
          <button
            className={`${
              visibleDiv === 2 ? "bg-primary text-white" : "text-primary"
            } py-2 px-4 lg:px-8 rounded-full hover:text-[white] hover:bg-primary border-2 border-primary hover:border-2 hover:border-primary hover:scale-110 duration-200`}
            onClick={() => {
              handleButtonClick(2);
            }}
          >
            Frontend
          </button>
          <button
            className={`${
              visibleDiv === 3 ? "bg-primary text-white" : "text-primary"
            } py-2 px-4 lg:px-8 rounded-full hover:text-[white] hover:bg-primary border-2 border-primary hover:border-2 hover:border-primary hover:scale-110 duration-200`}
            onClick={() => {
              handleButtonClick(3);
            }}
          >
            Backend
          </button>
        </div>
        <div>
          {visibleDiv === 1 && (
            <div>
              <HomeProjects />
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
        </div>
      </div>
    </>
  );
}

export default MyLatestProject;
