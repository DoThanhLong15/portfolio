import data from "./../../data/about-me.json";
import style from "./style/AboutMePage.module.css";

import AboutMeImage from "./../../components/about-me/AboutMeImage";
import PageDescription from "./../../components/others/PageDescription";
import SkillBox from "./../../components/others/SkillBox";
import TitleSession from "./../../components/others/TitleSession";

const AboutMePage = () => {
  return (
    <>
      <TitleSession title="About-me" />

      <PageDescription description={data.pageDescription} />

      <div className={style.contentArea}>
        <div className={style.content}>{data.content}</div>

        <AboutMeImage />
      </div>

      <TitleSession title="skills" />

      <div className={style.skillArea}>
        {data.skills &&
          data.skills.map((skill, index) => (
            <SkillBox
              key={index}
              skillName={skill.title}
              itemList={skill.items}
            />
          ))}
      </div>
    </>
  );
};

export default AboutMePage;
