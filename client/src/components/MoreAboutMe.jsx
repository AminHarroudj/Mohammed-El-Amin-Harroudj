import MySkills from "./MySkills";
import SkillsInProgress from "./SkillsInProgress";
import Technologies from "./Technologies";

function MoreAboutMe() {
  return (
    <>
      <div className="px-16 py-32 flex flex-col gap-10">
        <div className="flex flex-col gap-10 justify-center items-center text-center">
          <h1 className="text-5xl font-medium">
            More <span className="text-[#2EB2D3]">About</span> Me
          </h1>
          <p className="text-white text-opacity-50">
            Greeting, fellow digital explorers! I am Mohammed , a passionate
            developer
          </p>
        </div>
        <div className="grid grid-cols-2 gap-16 pt-6">
          <MySkills />
          <div className="grid grid-cols-1">
            <Technologies />
            <SkillsInProgress />
          </div>
        </div>
      </div>
    </>
  );
}

export default MoreAboutMe;
