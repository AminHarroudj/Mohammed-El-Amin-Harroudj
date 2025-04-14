import ProjectCard from "./ProjectCard";
import adwaveMockup from "../assets/adwave.png";
import smsImg from "../assets/sms.png";
import cityoneImg from "../assets/cityone.png";
import afrahoukom from "../assets/afrahoukom.png";

function HomeProjects() {
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
            imgSource={cityoneImg}
            title={"City One Algeria"}
            description={
              "Algerian Company for selling & product Coffee and Cappuchino"
            }
            livepreview={"https://cityone-algeria.com/"}
          />
        </div>
      </div>
    </>
  );
}

export default HomeProjects;
