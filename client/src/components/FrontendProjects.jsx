import ProjectCard from "./ProjectCard";
import adwaveMockup from "../assets/adwave.png";
import vamImg from "../assets/vam.png";
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
                "Frontend project developed for an Algerian digital marketing company, focusing on modern design and responsive user experience"
              }
              livepreview={"https://adwave.agency/"}
            />
          </div>
          <div className="lg:pt-10">
            <ProjectCard
              imgSource={plastoysImg}
              title={"Plastoys"}
              description={
                "E-commerce website for an Algerian company specializing in selling high-quality toys for children"
              }
              livepreview={"https://plastoys.vercel.app/"}
            />
          </div>
          <div>
            <ProjectCard
              imgSource={vamImg}
              title={"VAM Electric"}
              description={
                "Corporate website for an Algerian electrical company, presenting their product catalog and company information"
              }
              livepreview={"https://vam-electric.com/"}
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
      </div>
    </>
  );
}

export default FrontendProjects;
