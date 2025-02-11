import Tech from "./Tech";
import typescriptIcon from "../assets/typescript-svgrepo-com.svg";
import phpIcon from "../assets/php-1-logo-svgrepo-com.svg";
import mysqlIcon from "../assets/mysql-logo-svgrepo-com.svg";
import firebaseIcon from "../assets/firebase-svgrepo-com.svg";

function SkillsInProgress() {
  return (
    <>
      <div className="flex flex-col gap-6 lg:gap-10">
        <h1 className="text-3xl lg:text-4xl font-medium text-secondary">Skills In Progress</h1>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          <Tech title={"Type Script"}>
            <img src={typescriptIcon} alt="" />
          </Tech>
          <Tech title={"My SQL"}>
            <img src={mysqlIcon} alt="" />
          </Tech>
          <Tech title={"PHP"}>
            <img src={phpIcon} alt="" />
          </Tech>
          <Tech title={"Firebase"}>
            <img src={firebaseIcon} alt="" />
          </Tech>
        </div>
      </div>
    </>
  );
}

export default SkillsInProgress;
