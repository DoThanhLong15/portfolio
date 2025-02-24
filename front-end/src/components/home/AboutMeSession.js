import TitleSession from "../others/TitleSession";
import style from "./style/AboutMeSession.module.css";

const AboutMeSession = () => {
  return (
    <>
      <TitleSession title="about-me" />

      <div className={style.aboutMeSession}>
        <div className={style.descriptionArea}>
          <div className={style.description}>
            <p>Hello, I'm Long!</p>
            <p> I'm a passionate backend developer from Ho Chi Minh
            City Open University (OU HCM), with a background in Information
            Technology. I specialize in building scalable and secure backend
            systems.</p>
            <p> With hands-on experience in backend frameworks and database
            management, I am dedicated to continuous learning and staying
            updated with the latest technologies. I have a strong
            problem-solving mindset and a collaborative approach to working in
            development teams.</p>
          </div>

          <div className={style.btnReadMore}>Read more</div>
        </div>
        <div className={style.imageArea}>
          <img
            className={style.personImage}
            src="/assets/images/personImage2.png"
            alt="Profile"
          />
          <img
            className={style.dotLogo}
            src="/assets/images/dotLogo.png"
            alt="Dot 1"
          />
          <img
            className={style.dotLogo}
            src="/assets/images/dotLogo.png"
            alt="Dot 2"
          />
        </div>
      </div>
    </>
  );
};

export default AboutMeSession;
