import data from "./../../data/about-me.json";

import TitleSession from "../others/TitleSession";
import style from "./style/AboutMeSession.module.css";

const AboutMeSession = () => {
  return (
    <>
      <TitleSession title="about-me" />

      <div className={style.aboutMeSession}>
        <div className={style.descriptionArea}>
          <div className={style.description}>{data.content}</div>

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
