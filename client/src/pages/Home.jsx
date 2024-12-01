import Introduce from "../components/Introduce";
import MoreAboutMe from "../components/MoreAboutMe";
import MyLatestProject from "../components/MyLatestProject";
import MyServices from "../components/MyServices";
import Numbers from "../components/Numbers";
import ContactMe from "../components/ContactMe";

function Home() {
  return (
    <>
      <div>
        <Introduce />
        <MyServices />
        <Numbers />
        <MoreAboutMe />
        <MyLatestProject />
        <ContactMe />
      </div>
    </>
  );
}

export default Home;
