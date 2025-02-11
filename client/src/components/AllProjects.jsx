import ProjectCard from "./ProjectCard";
import adwaveMockup from "../assets/adwave.png";
import portfolioMockup from "../assets/sms.png";
import goatstoreImg from "../assets/goatstore.png";
import bahaImg from "../assets/baha.png";

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
            imgSource={portfolioMockup}
            title={"SMS ALGERIE SARL"}
            description={
              "Full Stack project for an algerian entreprise of car location"
            }
            livepreview={"https://sms-algerie.net/"}
          />
        </div>
        <div>
          <ProjectCard
            imgSource={goatstoreImg}
            title={"E-commerce Website"}
            description={
              "E-commerce website for an algerian entreprise of sport clouths"
            }
            livepreview={"https://goat-store-dz.com/"}
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
    </>
  );
}

export default AllProjects;
