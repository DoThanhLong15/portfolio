import AboutMeSession from "components/home/AboutMeSession";
import ContactSession from "components/home/ContactSession";
import IntroSession from "components/home/IntroSession";
import SkillSession from "components/home/SkillSession";


const HomePage = () => {
  return (
    <>
      <IntroSession />
      <SkillSession />
      <AboutMeSession />
      <ContactSession />
    </>
  );
};

export default HomePage;
