import data from "./../../data/contact.json";
import style from "./Footer.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className={style.footer}>
        <div className={style.line}></div>
        <div className={style.content}>
          <div className={style.descriptionArea}>
            <div className={style.authorArea}>
              <h3 className={style.author}>Long</h3>
              <div className={style.email}>longd8833@gmail.com</div>
            </div>
            <p className={style.description}>Backend developer</p>
          </div>

          <div className={style.media}>
            <h3 className={style.title}>Media</h3>
            <a
              href={data.contact.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className={style.icon}/>
            </a>
          </div>
        </div>

        <div className="copy-right"></div>
      </div>
    </>
  );
};

export default Footer;
