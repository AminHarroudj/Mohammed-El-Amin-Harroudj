import { motion } from "motion/react";

function ServiceCard({ children, title, description }) {
  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center text-center px-4 py-8 bg-[#2EB2D3] bg-opacity-20 border-2 border-[#2EB2D3] border-opacity-50 rounded-lg cursor-pointer hover:scale-105 hover:bg-opacity-40 duration-200">
        <div className="text-[#2EB2D3] text-7xl">{children}</div>
        <h1 className="text-2xl font-medium">{title}</h1>
        <p className="text-white text-opacity-50">{description}</p>
      </div>
    </>
  );
}

export default ServiceCard;
