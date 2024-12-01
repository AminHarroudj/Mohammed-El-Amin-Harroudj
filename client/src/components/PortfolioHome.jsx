import Button from "./Button";

function PortfolioHome() {
  return (
    <>
      <div className="flex max-lg:flex-col items-center pt-32 lg:pt-56 max-lg:pb-10 lg:pb-36 px-4 lg:px-16 bg-[#2EB2D3] bg-opacity-10 ">
        <div className="flex flex-col gap-6 lg:gap-10 text-center items-center">
          <div className="text-4xl lg:text-6xl font-medium flex flex-col gap-4">
            <h1>
              My <span className="text-[#2EB2D3]">Portfolio</span>
            </h1>
            <h1>Scroll To See My Projects</h1>
          </div>
          <p className="text-white text-opacity-50">
            Greetings, fellow digital explorers! I am Mohammed El Amin, a
            passionate and innovative developer dedicated to crafting immersive
            digital experiences. Welcome to my online abode
          </p>
          <div>
            <Button title={"Demande Free Consultation"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default PortfolioHome;