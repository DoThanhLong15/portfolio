import TitleSession from "../others/TitleSession";
import { useState } from "react";

import style from "./style/SkillSession.module.css";
import SkillBox from "../others/SkillBox";

const SkillSession = () => {
  const [skillList, setSkillInfo] = useState([
    {
      skillName: "Languages",
      skillItem: ["Java", "JavaScript", "Python"],
    },
    {
      skillName: "Tools",
      skillItem: ["VSCode", "Git", "Docker", "Figma"],
    },
    {
      skillName: "Databases",
      skillItem: ["MySQL", "Redis", "MongoDB"],
    },
    {
      skillName: "Others",
      skillItem: ["HTML", "CSS", "RestfulAPI"],
    },
    {
      skillName: "Frameworks",
      skillItem: ["React", "Node.js", "Spring", "Flash", "Express.js"],
    },
  ]);

  return (
    <>
      <TitleSession title="skills" />

      <div className={style.skillSession}>
        <div className={style.logoArea}></div>
        <div className={style.skillArea}>
          {skillList &&
            skillList.map((skill) => (
              <SkillBox
                key={skill.skillName}
                skillName={skill.skillName}
                itemList={skill.skillItem}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default SkillSession;
