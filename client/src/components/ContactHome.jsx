import Button from "./Button";
import { Link } from "react-router-dom";

function ContactHome() {
  return (
    <>
      <div className="flex max-lg:flex-col items-center pt-32 lg:pt-56 max-lg:pb-10 lg:pb-20 px-4 lg:px-16">
        <div className="flex flex-col gap-6 lg:gap-10 text-center items-center">
          <div className="text-4xl lg:text-6xl font-medium flex flex-col gap-4 text-secondary">
            <h1>
              <span className="text-primary">Contact</span> Me
            </h1>
            <h1>To Help You For Your Business</h1>
          </div>
          <p className="text-black text-opacity-50">
            If you&apos;re looking for a reliable and skilled web developer to
            bring your ideas to life and create impactful, custom web solutions,
            feel free to reach out. I’m here to help you turn your vision into
            reality with quality, efficiency, and attention to detail
          </p>
          <div>
            <Link to={"/contact"}>
              <Button title={"Demande Free Consultation"} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactHome;
