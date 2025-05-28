import ProjectCard from "./ProjectCard";
import adwaveMockup from "../assets/adwave.png";
import smsImg from "../assets/sms.png";
import bahaImg from "../assets/baha.png";
import plastoysImg from "../assets/plastoys.png";
import afrahoukom from "../assets/afrahoukom.png";
import cityoneImg from "../assets/cityone.png";
import medexpertImg from "../assets/medexpert.png";
import vamImg from "../assets/vam.png";
import goatImg from "../assets/goatstore.png";

function AllProjects() {
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
            imgSource={plastoysImg}
            title={"Plastoys"}
            description={
              "E-commerce website for an Algerian company specializing in selling high-quality toys for children"
            }
            livepreview={"https://plastoys.dz/"}
          />
        </div>
        <div>
          <ProjectCard
            imgSource={cityoneImg}
            title={"City One Algeria"}
            description={
              "Website for an Algerian coffee and cappuccino company, showcasing their product range and brand story"
            }
            livepreview={"https://cityone-algeria.com/"}
          />
        </div>
        <div className="lg:pt-10">
          <ProjectCard
            imgSource={bahaImg}
            title={"Designer Portfolio"}
            description={
              "Personal portfolio site for a graphic designer and presentation specialist, highlighting creative projects and expertise"
            }
            livepreview={"https://baha-eddine-portfolio.vercel.app/"}
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
            imgSource={vamImg}
            title={"VAM Electric"}
            description={
              "Corporate website for an Algerian electrical company, presenting their product catalog and company information"
            }
            livepreview={"https://vam-electric.com/"}
          />
        </div>
        <div>
          <ProjectCard
            imgSource={adwaveMockup}
            title={"Adwave Website"}
            description={
              "Frontend project developed for an Algerian digital marketing company, focusing on modern design and responsive user experience"
            }
            livepreview={"https://adwave.agency/"}
          />
        </div>
      </div>
    </>
  );
}

export default AllProjects;
