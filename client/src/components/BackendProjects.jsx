import ProjectCard from "./ProjectCard";
import afrahoukom from "../assets/afrahoukom.png";
import portfolioMockup from "../assets/sms.png";
import medexpertImg from "../assets/medexpert.png";
import goatImg from "../assets/goatstore.png";

function BackendProjects() {
  return (
    <>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div>
            <ProjectCard
              imgSource={portfolioMockup}
              title={"SMS ALGERIE SARL"}
              description={
                "Full-stack web application for an Algerian car rental company, featuring seamless booking and management functionalities"
              }
              livepreview={"https://sms-algerie.net/"}
            />
          </div>
          <div className="lg:pt-10">
            <ProjectCard
              imgSource={afrahoukom}
              title={"Afrahoukom"}
              description={
                "Online platform for an Algerian wedding services company, offering convenient access to a variety of wedding-related services"
              }
              livepreview={"https://afrahoukom.com/"}
            />
          </div>
          <div className="">
            <ProjectCard
              imgSource={medexpertImg}
              title={"Med Expert"}
              description={
                "Web application designed for medical students in Algeria to purchase study packs of QCMs and courses for exam preparation"
              }
              livepreview={"https://medexpertdz.com/"}
            />
          </div>
          <div className="lg:pt-10">
            <ProjectCard
              imgSource={goatImg}
              title={"GOAT STORE"}
              description={
                "Algerian e-commerce platform specializing in sports apparel, shoes, and balls, offering a wide range of quality products for athletes and sports enthusiasts"
              }
              livepreview={"https://goat-store-dz.com/"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default BackendProjects;
