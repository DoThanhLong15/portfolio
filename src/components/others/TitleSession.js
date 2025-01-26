import style from "./style/TitleSession.module.css";

const TitleSession = ({ title }) => {
  return (
    <h3 className={style.title}>
      <span className={style.icon}>#</span>     
      {title}
      <span className={style.line}></span>
    </h3>
  );
};

export default TitleSession;
