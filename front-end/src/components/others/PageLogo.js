import style from "./style/PageLogo.module.css";


const PageLogo = () => {
  return (
    <>
      <img
        className={style.pageLogo}
        src="/assets/images/pageLogo.png"
        alt="pageLogo"
      />
    </>
  );
};

export default PageLogo;
