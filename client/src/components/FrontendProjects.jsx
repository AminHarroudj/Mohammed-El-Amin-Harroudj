import ProjectCard from "./ProjectCard";
import adwaveMockup from "../assets/adwave.png";
import bahaImg from "../assets/baha.png";
import plastoysImg from "../assets/plastoys.png";
import cityoneImg from "../assets/cityone.png";

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
              imgSource={plastoysImg}
              title={"Plastoys"}
              description={
                "Algerian Company for selling & product toys for children"
              }
              livepreview={"https://plastoys.vercel.app/"}
            />
          </div>
          <div>
            <ProjectCard
              imgSource={bahaImg}
              title={"Designer Portfolio"}
              description={
                "Portfolio for a Graphic Designer and Specialiste Presentation"
              }
              livepreview={"https://baha-eddine-portfolio.vercel.app/"}
            />
          </div>
          <div className="lg:pt-10">
            <ProjectCard
              imgSource={cityoneImg}
              title={"City One Algeria"}
              description={
                "Algerian Company for selling & product Coffee and Cappuchino"
              }
              livepreview={"https://cityone-algeria.com/"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FrontendProjects;
