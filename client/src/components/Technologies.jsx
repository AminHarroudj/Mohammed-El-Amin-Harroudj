import Tech from "./Tech";
import gitIcon from "../assets/git-svgrepo-com.svg";
import wordpressIcon from "../assets/wordpress-color-svgrepo-com.svg";
import figmaIcon from "../assets/figma-svgrepo-com.svg";
import githubIcon from "../assets/github-svgrepo-com.svg";
import reactrouterIcon from "../assets/react-router-svgrepo-com.svg";

function Technologies() {
  return (
    <>
      <div className="flex flex-col gap-6 lg:gap-10">
        <h1 className="text-3xl lg:text-4xl font-medium">Additional Technologies</h1>
        <div className="grid grid-cols-3 gap-6">
          <Tech title={"Git"}>
            <img src={gitIcon} alt="" />
          </Tech>
          <Tech title={"Wordpress"}>
            <img src={wordpressIcon} alt="" />
          </Tech>
          <Tech title={"Figma"}>
            <img src={figmaIcon} alt="" />
          </Tech>
          <Tech title={"Git Hub"}>
            <img src={githubIcon} alt="" />
          </Tech>
          <Tech title={"React Router"}>
            <img src={reactrouterIcon} alt="" />
          </Tech>
        </div>
      </div>
    </>
  );
}

export default Technologies;
