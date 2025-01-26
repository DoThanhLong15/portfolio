import TitleSession from "../others/TitleSession";
import style from "./style/ContactSession.module.css";

const ContactSession = () => {
  return (
    <>
      <TitleSession title="contacts" />

      <div className="flex">
        <div className={style.description}>
          I’m interested in freelance opportunities. However, if you have ot    her
          request or question, don’t hesitate to contact me.
        </div>
        <div className={style.contact}>
          <div className={style.contactTitle}>Message me here</div>
          <div className={style.contactItem}>longd8833@gmail.com</div>
        </div>
      </div>
    </>
  );
};

export default ContactSession;
