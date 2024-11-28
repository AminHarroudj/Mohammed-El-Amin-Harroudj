import htmlIcon from "../assets/html-5-svgrepo-com.svg";
import cssIcon from "../assets/css-3-svgrepo-com.svg";
import javascriptIcon from "../assets/javascript-svgrepo-com.svg";
import reactIcon from "../assets/react-svgrepo-com.svg";
import tailwindcssIcon from "../assets/tailwind-css-svgrepo-com.svg";
import uiIcon from "../assets/ui-states-svgrepo-com.svg";
import uxIcon from "../assets/ux-mobile-svgrepo-com.svg";

import Skill from "./Skill";

function MySkills() {
  return (
    <>
      <div className="flex flex-col gap-10">
        <h1 className="text-4xl font-medium">My Skills</h1>
        <div className="flex flex-col gap-4">
          <Skill title={"HTML"} percentage={90}>
            <img src={htmlIcon} alt="" />
          </Skill>
          <Skill title={"CSS"} percentage={90}>
            <img src={cssIcon} alt="" />
          </Skill>
          <Skill title={"Java Script"} percentage={80}>
            <img src={javascriptIcon} alt="" />
          </Skill>
          <Skill title={"React JS"} percentage={70}>
            <img src={reactIcon} alt="" />
          </Skill>
          <Skill title={"Tailwind CSS"} percentage={90}>
            <img src={tailwindcssIcon} alt="" />
          </Skill>
          <Skill title={"User Interface"} percentage={70}>
            <img src={uiIcon} alt="" />
          </Skill>
          <Skill title={"User Experience"} percentage={60}>
            <img src={uxIcon} alt="" />
          </Skill>
        </div>
      </div>
    </>
  );
}

export default MySkills;
