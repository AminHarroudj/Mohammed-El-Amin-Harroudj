import Button from "./Button";
import ServiceCard from "./ServiceCard";
import { TbDeviceDesktopCode } from "react-icons/tb";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { MdOutlineDesignServices } from "react-icons/md";
import { PiProjectorScreenChartLight } from "react-icons/pi";
import { Link } from "react-router-dom";

function MyServices() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 lg:px-16 py-16 lg:py-32">
        <div className="flex flex-col gap-6 lg:gap-10 items-start lg:pt-16 max-lg:text-center max-lg:items-center">
          <h1 className="text-4xl lg:text-5xl font-medium text-secondary">
            My <span className="text-primary">Services</span>
          </h1>
          <p className="text-black text-opacity-50">
            Looking to bring your web project to life? I&apos;m here to help. My web
            development skills transform ideas into reality. I&apos;m known for
            delivering projects on time and within budget. My clients appreciate
            my meticulous attention to detail, creativity, and commitment to
            excellence.
          </p>
          <p className="text-black text-opacity-50">
            I&apos;m committed to staying up-to-date with the latest web development
            trends to deliver cutting-edge solutions.
          </p>
          <Link to={"/services"}>
            <Button title={"Reade More"} />
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          <div className="flex flex-col gap-6 lg:gap-10">
            <ServiceCard
              title={"Frontend Develop"}
              description={
                "Crafting pixel-perfect, responsive, and engaging user interfaces with React JS"
              }
            >
              <TbDeviceDesktopCode />
            </ServiceCard>
            <ServiceCard
              title={"UI/UX Design"}
              description={
                "Designing user-centered experiences that enhance product usability."
              }
            >
              <MdOutlineDesignServices />
            </ServiceCard>
          </div>
          <div className="flex flex-col gap-6 lg:gap-10 lg:pt-10">
            <ServiceCard
              title={"Backend Develop"}
              description={
                "Building robust and scalable backend systems with Node.js , Express Js and Mongo DB"
              }
            >
              <LiaLaptopCodeSolid />
            </ServiceCard>

            <ServiceCard
              title={"Project Manegment"}
              description={
                "Managing projects efficiently from inception to completion, ensuring client satisfaction"
              }
            >
              <PiProjectorScreenChartLight />
            </ServiceCard>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyServices;
