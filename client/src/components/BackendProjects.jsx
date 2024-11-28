import ProjectCard from "./ProjectCard";
import adwaveImg from "../assets/adwave.png";

function BackendProjects() {
  return (
    <>
      <div>
        <div className="grid grid-cols-4 gap-6">
          <div>
            <ProjectCard
              imgSource={adwaveImg}
              title={"Adwave Website"}
              description={
                "Frontend project for an algerian entreprise of digital marketing"
              }
            />
          </div>
          <div className="pt-10">
            <ProjectCard
              imgSource={adwaveImg}
              title={"Adwave Website"}
              description={
                "Frontend project for an algerian entreprise of digital marketing"
              }
            />
          </div>
          <div>
            <ProjectCard
              imgSource={adwaveImg}
              title={"Adwave Website"}
              description={
                "Frontend project for an algerian entreprise of digital marketing"
              }
            />
          </div>
          <div className="pt-10">
            <ProjectCard
              imgSource={adwaveImg}
              title={"Adwave Website"}
              description={
                "Frontend project for an algerian entreprise of digital marketing"
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default BackendProjects;
