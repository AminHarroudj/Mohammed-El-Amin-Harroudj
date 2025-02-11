import MySkills from "./MySkills";
import SkillsInProgress from "./SkillsInProgress";
import Technologies from "./Technologies";

function MoreAboutMe() {
  return (
    <>
      <div className="px-4 lg:px-16 py-16 lg:py-32 flex flex-col gap-6">
        <div className="flex flex-col gap-6  justify-center items-center text-center">
          <h1 className="text-4xl lg:text-5xl font-medium text-secondary">
            More <span className="text-primary">About</span> Me
          </h1>
          <p className="text-white text-opacity-50">
            Here, I showcase my technical skills that demonstrate my expertise
            in building modern, user-focused web applications
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 pt-6">
          <div>
            <MySkills />
          </div>
          <div className="grid grid-cols-1 max-lg:gap-10">
            <Technologies />
            <SkillsInProgress />
          </div>
        </div>
      </div>
    </>
  );
}

export default MoreAboutMe;
