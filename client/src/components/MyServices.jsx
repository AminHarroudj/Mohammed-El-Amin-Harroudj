import Button from "./Button";
import ServiceCard from "./ServiceCard";
import { TbDeviceDesktopCode } from "react-icons/tb";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { MdOutlineDesignServices } from "react-icons/md";
import { PiProjectorScreenChartLight } from "react-icons/pi";

function MyServices() {
  return (
    <>
      <div className="grid grid-cols-2 gap-10 px-16 py-32">
        <div className="flex flex-col gap-10 items-start lg:pt-16">
          <h1 className="text-5xl font-medium">
            My <span className="text-[#2EB2D3]">Services</span>
          </h1>
          <p className="text-white text-opacity-50">
            Greetings, fellow digital explorers! I am Amin , a passionate and
            innovative developer dedicated to crafting immersive digital
            experiences.Welcome to my online abode
          </p>
          <p className="text-white text-opacity-50">
            Greetings, fellow digital explorers! I am Amin , a passionate and
            innovative developer
          </p>
          <Button title={"Reade More"} />
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col gap-10">
            <ServiceCard
              title={"Frontend Develop"}
              description={
                "Greetings, fellow digital explorers! I am Amin , a passionate"
              }
            >
              <TbDeviceDesktopCode />
            </ServiceCard>
            <ServiceCard
              title={"UI/UX Design"}
              description={
                "Greetings, fellow digital explorers! I am Amin , a passionate"
              }
            >
              <MdOutlineDesignServices />
            </ServiceCard>
          </div>
          <div className="flex flex-col gap-10 lg:pt-10">
            <ServiceCard
              title={"Backend Develop"}
              description={
                "Greetings, fellow digital explorers! I am Amin , a passionate"
              }
            >
              <LiaLaptopCodeSolid />
            </ServiceCard>

            <ServiceCard
              title={"Project Manegment"}
              description={
                "Greetings, fellow digital explorers! I am Amin , a passionate"
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
