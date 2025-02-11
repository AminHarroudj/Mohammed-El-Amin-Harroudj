import ProjectCard from "./ProjectCard";
import goatstoreImg from "../assets/goatstore.png";
import portfolioMockup from "../assets/sms.png";

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
                "Full Stack project for an algerian entreprise of car location"
              }
              livepreview={"https://sms-algerie.net/"}
            />
          </div>
          <div className="lg:pt-10">
            <ProjectCard
              imgSource={goatstoreImg}
              title={"E-commerce Website"}
              description={
                "E-commerce website for an algerian entreprise of sport clouths"
              }
              livepreview={"https://goat-store-brown.vercel.app/"}
            />
          </div>
          <div className="lg:pt-10"></div>
        </div>
      </div>
    </>
  );
}

export default BackendProjects;
