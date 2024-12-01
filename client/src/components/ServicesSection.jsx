import frontendImg from "../assets/frontend-svgrepo-com.svg";
import backendImg from "../assets/backend-svgrepo-com.svg";
import ecommerceImg from "../assets/ecommerce-svgrepo-com.svg";
import ServicePresentation from "./ServicePresentation";
import Button from "./Button";

function ServicesSection() {
  return (
    <>
      <div className="flex flex-col gap-6 items-center pt-16 lg:pt-32 px-4 lg:px-16 max-lg:text-center">
        <div className="flex flex-col lg:grid lg:grid-cols-2 items-center lg:gap-20">
          <div className="">
            <img src={frontendImg} alt="" />
          </div>
          <div className="flex flex-col items-center lg:items-start gap-6">
            <h1 className="text-4xl lg:text-5xl font-medium">
              <span className="text-[#2EB2D3]">Frontend </span> Development
            </h1>
            <ServicePresentation
              number={"01"}
              title={"Portfolio"}
              description={
                "Portfolio web site very exciting and intractive for take a good job and good salary"
              }
            />
            <ServicePresentation
              number={"01"}
              title={"Portfolio"}
              description={
                "Portfolio web site very exciting and intractive for take a good job and good salary"
              }
            />
            <Button title={"Demand Free Consultation"} />
          </div>
        </div>

        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 items-center lg:gap-20">
          <div className="flex flex-col items-center lg:items-start gap-6">
            <h1 className="text-4xl lg:text-5xl font-medium">
              <span className="text-[#2EB2D3]">Backend </span> Development
            </h1>
            <ServicePresentation
              number={"01"}
              title={"Portfolio"}
              description={
                "Portfolio web site very exciting and intractive for take a good job and good salary"
              }
            />
            <ServicePresentation
              number={"01"}
              title={"Portfolio"}
              description={
                "Portfolio web site very exciting and intractive for take a good job and good salary"
              }
            />
            <Button title={"Demand Free Consultation"} />
          </div>
          <div className="">
            <img src={backendImg} alt="" />
          </div>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 items-center lg:gap-20">
          <div className="">
            <img src={frontendImg} alt="" />
          </div>
          <div className="flex flex-col items-center lg:items-start gap-6">
            <h1 className="text-4xl lg:text-5xl font-medium">
              <span className="text-[#2EB2D3]">Full Stack </span> Development
            </h1>
            <ServicePresentation
              number={"01"}
              title={"Portfolio"}
              description={
                "Portfolio web site very exciting and intractive for take a good job and good salary"
              }
            />
            <ServicePresentation
              number={"01"}
              title={"Portfolio"}
              description={
                "Portfolio web site very exciting and intractive for take a good job and good salary"
              }
            />
            <Button title={"Demand Free Consultation"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicesSection;
