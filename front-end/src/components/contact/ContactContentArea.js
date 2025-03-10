import data from "data/contact.json";
import style from "./style/ContactContentArea.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactContentArea = () => {
  return (
    <>
      <div className={style.contentArea}>
        <div className={style.content}>{data.content}</div>
        <div className={style.contact}>
          <div className={style.contactTitle}>Message me here</div>
          <div className={style.contactItem}>
            <FontAwesomeIcon icon={faEnvelope} className={style.contactIcon} />
             {data.contact.email}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactContentArea;
