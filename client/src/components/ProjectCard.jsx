import { Link } from "react-router-dom";
import shareIcon from "../assets/share-svgrepo-com.svg";

// eslint-disable-next-line react/prop-types
function ProjectCard({ imgSource, title, description, livepreview }) {
  return (
    <>
      <div className="flex flex-col gap-6 bg-[#2EB2D3] bg-opacity-20 border-2 border-[#2EB2D3] rounded-lg p-4 hover:bg-opacity-40 duration-200">
        <img src={imgSource} alt="" className="rounded-lg h-[150px]" />
        <h1 className="text-2xl font-medium">{title}</h1>
        <p className="text-white text-opacity-50 text-base">{description}</p>
        <div className="flex justify-end gap-2 items-center text-base mb-2">
          <Link to={livepreview} target="_blank">
            <button className="flex items-center gap-2 py-2 px-4 rounded-full border-2 border-[#2EB2D3] hover:bg-[#2EB2D3] hover:scale-105 duration-200">
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
