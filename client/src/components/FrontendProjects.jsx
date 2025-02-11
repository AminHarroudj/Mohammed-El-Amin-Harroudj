import ProjectCard from "./ProjectCard";
import adwaveMockup from "../assets/adwave.png";
import bahaImg from "../assets/baha.png";

function FrontendProjects() {
  return (
    <>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div>
            <ProjectCard
              imgSource={adwaveMockup}
              title={"Adwave Website"}
              description={
                "Frontend project for an algerian entreprise of digital marketing"
              }
              livepreview={"https://adwave.agency/"}
            />
          </div>
          <div className="lg:pt-10">
            <ProjectCard
              imgSource={bahaImg}
              title={"Designer Portfolio"}
              description={
                "Portfolio for a Graphic Designer and Specialiste Presentation"
              }
              livepreview={"https://baha-eddine-portfolio.vercel.app/"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FrontendProjects;
