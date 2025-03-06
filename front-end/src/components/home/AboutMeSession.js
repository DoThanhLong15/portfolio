import data from "./../../data/about-me.json";
import style from "./style/AboutMeSession.module.css";

import AboutMeImage from "../about-me/AboutMeImage";
import TitleSession from "../others/TitleSession";

import { useNavigate } from "react-router-dom";

const AboutMeSession = () => {
  const navigate = useNavigate();

  const goAboutMePage = () => navigate("/about-me");

  return (
    <>
      <TitleSession title="about-me" />

      <div className={style.aboutMeSession}>
        <div className={style.descriptionArea}>
          <div className={style.description}>{data.content}</div>

          <div className={style.btnReadMore} onClick={goAboutMePage}>
            Read more
          </div>
        </div>

        <AboutMeImage />
      </div>
    </>
  );
};

export default AboutMeSession;
