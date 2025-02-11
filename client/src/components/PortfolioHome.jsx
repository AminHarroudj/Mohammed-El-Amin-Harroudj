import Button from "./Button";
import { Link } from "react-router-dom";

function PortfolioHome() {
  return (
    <>
      <div className="flex max-lg:flex-col items-center pt-32 lg:pt-56 max-lg:pb-10 lg:pb-20 px-4 lg:px-16">
        <div className="flex flex-col gap-6 lg:gap-10 text-center items-center">
          <div className="text-4xl lg:text-6xl font-medium flex flex-col gap-4 text-secondary">
            <h1>
              My <span className="text-primary">Portfolio</span>
            </h1>
            <h1>Scroll To See My Projects</h1>
          </div>
          <p className="text-black text-opacity-50">
            Here, you can explore a diverse selection of my projects that
            showcase my expertise in both frontend and backend development. Each
            project reflects my ability to create innovative, user-friendly web
            applications that solve real-world problems
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

export default PortfolioHome;
