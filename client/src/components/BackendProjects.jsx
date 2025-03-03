import ProjectCard from "./ProjectCard";
import afrahoukom from "../assets/afrahoukom.png";
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
              imgSource={afrahoukom}
              title={"Afrahoukom"}
              description={
                "An Algerian company for serve wedding services online"
              }
              livepreview={"https://afrahoukom.com/"}
            />
          </div>
          <div className="lg:pt-10"></div>
        </div>
      </div>
    </>
  );
}

export default BackendProjects;
