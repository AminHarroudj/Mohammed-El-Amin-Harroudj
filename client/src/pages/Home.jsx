import ContactMe from "../components/ContactMe";
import Introduce from "../components/Introduce";
import KnowMoreWithMyArticle from "../components/KnowMoreWithMyArticle";
import MoreAboutMe from "../components/MoreAboutMe";
import MyLatestProject from "../components/MyLatestProject";
import MyServices from "../components/MyServices";
import Numbers from "../components/Numbers";

function Home() {
  return (
    <>
      <div>
        <Introduce />
        <MyServices />
        <Numbers />
        <MoreAboutMe />
        <MyLatestProject />
        <KnowMoreWithMyArticle />
        <ContactMe />
      </div>
    </>
  );
}

export default Home;
