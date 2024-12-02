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
              title={"Responsive Website"}
              description={
                "Ensuring that the website or application is fully functional and looks great on all devices (desktops, tablets, smartphones)"
              }
            />
            <ServicePresentation
              number={"02"}
              title={"Performance Optimization"}
              description={
                "Improving the load speed and responsiveness of the site through techniques like image optimization, lazy loading, and code splitting"
              }
            />
            <ServicePresentation
              number={"03"}
              title={"SEO Optimization"}
              description={
                "Implementing on-page SEO techniques to improve search engine rankings, such as optimizing metadata, content, and structure"
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
              title={"Database Management"}
              description={
                "Setting up and managing databases to store and retrieve data (MySQL, MongoDB)"
              }
            />
            <ServicePresentation
              number={"02"}
              title={"API Development"}
              description={
                "Creating APIs to enable communication between the frontend and backend"
              }
            />
            <ServicePresentation
              number={"03"}
              title={"Authentication & Authorization"}
              description={
                "Implementing user authentication (login, registration) and authorization (permissions, access control) to ensure security"
              }
            />
            <ServicePresentation
              number={"04"}
              title={"Email Services"}
              description={
                "Integrating email services for notifications, confirmations, and alerts"
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
              title={"Ecommerce Website"}
              description={
                "A fully functional online store with product listings, a shopping cart, and order management system"
              }
            />
            <ServicePresentation
              number={"02"}
              title={"Content Management System"}
              description={
                "A platform for managing digital content such as articles, blogs, videos, and images, with user roles and permissions, a dashboard, and SEO optimization features"
              }
            />
            <ServicePresentation
              number={"03"}
              title={"Subscription Service Website"}
              description={
                "A platform for subscription-based services (e.g., digital content, physical products), with recurring billing, user account management, and personalized recommendations."
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
