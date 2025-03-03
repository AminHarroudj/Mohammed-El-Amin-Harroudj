import { Link } from "react-router-dom";
import shareIcon from "../assets/share-svgrepo-com.svg";

// eslint-disable-next-line react/prop-types
function ProjectCard({ imgSource, title, description, livepreview }) {
  return (
    <>
      <div className="flex flex-col gap-4 cursor-pointer bg-primary shadow-[0_0_15px_rgba(0,0,0,0.15)] rounded-2xl p-4 bg-opacity-20 hover:bg-opacity-30 duration-200">
        <img src={imgSource} alt="" className="rounded-lg h-[150px] bg-white" />
        <h1 className="text-2xl font-medium text-secondary">{title}</h1>
        <p className="text-black text-opacity-50 text-base">{description}</p>
        <div className="flex justify-end gap-2 items-center text-base mb-2">
          <Link to={livepreview} target="_blank">
            <button className="flex items-center gap-2 py-2 px-4 rounded-full border-2 bg-primary border-primary hover:bg-primary hover:scale-105 duration-200 text-white">
              <img src={shareIcon} alt="" className="w-[25px]" />
              Live
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
