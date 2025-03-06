import style from "./style/AboutMeImage.module.css";


const AboutMeImage = () => {
  return (
    <>
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
    </>
  );
};

export default AboutMeImage;
