import AllProjects from "../components/AllProjects";
import Button from "./Button";

function PortfolioContent() {
  return (
    <>
      <div className="px-4 lg:px-16 pt-16 lg:pt-32 flex flex-col items-center gap-6 lg:gap-10">
        <div className="flex flex-col gap-6 lg:gap-10 justify-center items-center text-center">
          <h1 className="text-4xl lg:text-5xl font-medium text-secondary">
            All My <span className="text-primary">Projects</span>
          </h1>
          <p className="text-black text-opacity-50">
            Greeting, fellow digital explorers! I am Mohammed , a passionate
            developer
          </p>
        </div>
        <div>
          <AllProjects />
        </div>
        <Button title={"Demand Free Consultation"} />
      </div>
    </>
  );
}

export default PortfolioContent;
