import style from "./style/IntroSession.module.css";

const IntroSession = () => {
  return (
    <>
      <div className={style.introSession}>
        <div className={style.descriptionArea}>
          <div className={style.title}>
            Long is a <span className={style.role}>Backend Developer</span>
          </div>

          <div className={style.description}>
            Transforming ideas into reliable systems.
          </div>

          <div className={style.btnContact}>Contact me !!</div>
        </div>
        <div className={style.imageArea}>
          <img
            className={style.personImage}
            src="/assets/images/personImage3.png"
            alt="Profile"
          />
          <img
            className={style.squareLogo}
            src="/assets/images/squareLogo.png"
            alt="Square"
          />
          <img
            className={style.dotLogo}
            src="/assets/images/dotLogo.png"
            alt="Dot"
          />
          <div className={style.imageDescription}>
            <span className={style.icon}></span>
            Currently working on <span>Portfolio</span>
          </div>
        </div>
      </div>

      <div className={style.slogan}>
        <img
          className={style.leftQuote}
          src="/assets/icon/quote.png"
          alt="quote"
        />
        <div className={style.text}>
          The only way to do great work is to love what you do.
        </div>
        <img
          className={style.rightQuote}
          src="/assets/icon/quote.png"
          alt="quote"
        />
        <div className={style.author}>- Steve Jobs</div>
      </div>
    </>
  );
};

export default IntroSession;
