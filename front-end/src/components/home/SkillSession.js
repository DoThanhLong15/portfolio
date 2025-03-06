import data from "./../../data/about-me.json";
import style from "./style/SkillSession.module.css";

import SkillBox from "../others/SkillBox";
import TitleSession from "../others/TitleSession";

const SkillSession = () => {

  return (
    <>
      <TitleSession title="skills" />

      <div className={style.skillSession}>
        <div className={style.logoArea}></div>
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
      </div>
    </>
  );
};

export default SkillSession;
