import ProjectCard from "./ProjectCard";
import smsImg from "../assets/sms.png";
import cityoneImg from "../assets/cityone.png";
import afrahoukom from "../assets/afrahoukom.png";
import goatImg from "../assets/goatstore.png";

function HomeProjects() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div>
          <ProjectCard
            imgSource={goatImg}
            title={"GOAT STORE"}
            description={
              "Algerian e-commerce platform specializing in sports apparel, shoes, and balls, offering a wide range of quality products for athletes and sports enthusiasts"
            }
            livepreview={"https://goat-store-dz.com/"}
          />
        </div>
        <div className="lg:pt-10">
          <ProjectCard
            imgSource={smsImg}
            title={"SMS ALGERIE SARL"}
            description={
              "Full-stack web application for an Algerian car rental company, featuring seamless booking and management functionalities"
            }
            livepreview={"https://sms-algerie.net/"}
          />
        </div>
        <div>
          <ProjectCard
            imgSource={afrahoukom}
            title={"Afrahoukom"}
            description={
              "Online platform for an Algerian wedding services company, offering convenient access to a variety of wedding-related services"
            }
            livepreview={"https://afrahoukom.com/"}
          />
        </div>
        <div className="lg:pt-10">
          <ProjectCard
            imgSource={cityoneImg}
            title={"City One Algeria"}
            description={
              "Website for an Algerian coffee and cappuccino company, showcasing their product range and brand story"
            }
            livepreview={"https://cityone-algeria.com/"}
          />
        </div>
      </div>
    </>
  );
}

export default HomeProjects;
