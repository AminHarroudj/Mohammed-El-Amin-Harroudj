import javascriptIcon from "../assets/javascript-svgrepo-com.svg";
import reactIcon from "../assets/react-svgrepo-com.svg";
import nodeIcon from "../assets/node-js-svgrepo-com.svg";
import expressIcon from "../assets/express-svgrepo-com.svg";
import mongoIcon from "../assets/mongo-svgrepo-com.svg";
import Skill from "./Skill";

function MySkills() {
  return (
    <>
      <div className="flex flex-col gap-6 lg:gap-10">
        <h1 className="text-3xl lg:text-4xl font-medium text-secondary">
          My Skills
        </h1>
        <div className="flex flex-col gap-4">
          <Skill title={"Java Script"} percentage={90}>
            <img src={javascriptIcon} alt="" />
          </Skill>
          <Skill title={"React JS"} percentage={80}>
            <img src={reactIcon} alt="" />
          </Skill>
          <Skill title={"Node JS"} percentage={90}>
            <img src={nodeIcon} alt="" />
          </Skill>
          <Skill title={"Express JS"} percentage={90}>
            <img src={expressIcon} alt="" />
          </Skill>
          <Skill title={"Mongo DB"} percentage={80}>
            <img src={mongoIcon} alt="" />
          </Skill>
        </div>
      </div>
    </>
  );
}

export default MySkills;
