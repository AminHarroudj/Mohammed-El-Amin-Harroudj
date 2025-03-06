import ProjectCard from "./ProjectCard";
import adwaveMockup from "../assets/adwave.png";
import smsImg from "../assets/sms.png";
import bahaImg from "../assets/baha.png";
import plastoysImg from "../assets/plastoys.png";
import afrahoukom from "../assets/afrahoukom.png";

function AllProjects() {
  return (
    <>
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
            imgSource={smsImg}
            title={"SMS ALGERIE SARL"}
            description={
              "Full Stack project for an algerian entreprise of car location"
            }
            livepreview={"https://sms-algerie.net/"}
          />
        </div>
        <div>
          <ProjectCard
            imgSource={afrahoukom}
            title={"Afrahoukom"}
            description={
              "An Algerian company for serve wedding services online"
            }
            livepreview={"https://afrahoukom.com/"}
          />
        </div>
        <div className="lg:pt-10">
          <ProjectCard
            imgSource={plastoysImg}
            title={"Plastoys"}
            description={
              "Algerian Company for selling & product toys for children"
            }
            livepreview={"https://plastoys.dz/"}
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
      </div>
    </>
  );
}

export default AllProjects;
