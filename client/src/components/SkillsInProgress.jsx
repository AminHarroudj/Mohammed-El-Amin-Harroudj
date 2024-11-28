import Tech from "./Tech";
import typescriptIcon from "../assets/typescript-svgrepo-com.svg";
import nodeIcon from "../assets/node-js-svgrepo-com.svg";
import expressIcon from "../assets/express-svgrepo-com.svg";
import mongoIcon from "../assets/mongo-svgrepo-com.svg";
import phpIcon from "../assets/php-1-logo-svgrepo-com.svg";
import mysqlIcon from "../assets/mysql-logo-svgrepo-com.svg";

function SkillsInProgress() {
  return (
    <>
      <div className="flex flex-col gap-10">
        <h1 className="text-4xl font-medium">Skills In Progress</h1>
        <div className="grid grid-cols-3 gap-6">
          <Tech title={"Type Script"}>
            <img src={typescriptIcon} alt="" />
          </Tech>
          <Tech title={"Node JS"}>
            <img src={nodeIcon} alt="" />
          </Tech>
          <Tech title={"Express JS"}>
            <img src={expressIcon} alt="" />
          </Tech>
          <Tech title={"Mongo DB"}>
            <img src={mongoIcon} alt="" />
          </Tech>
          <Tech title={"PHP"}>
            <img src={phpIcon} alt="" />
          </Tech>
          <Tech title={"My SQL"}>
            <img src={mysqlIcon} alt="" />
          </Tech>
        </div>
      </div>
    </>
  );
}

export default SkillsInProgress;
