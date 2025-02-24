import style from "./style/SkillBox.module.css";

const SkillBox = ({ skillName, itemList }) => {
  return (
    <>
      <div className={style.skillBox}>
        <div className={style.skillBoxName}>{skillName}</div>
        <div className={style.skillBoxList}>
          {itemList.map((item, index) => (
            <div key={index} className={style.skillBoxItem}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SkillBox;
