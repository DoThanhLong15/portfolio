import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import style from "./style/ReturnButton.module.css";

const ReturnButton = ({ history }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(history);
  };

  return (
    <div onClick={goBack} className={style.returnButton}>
      <FontAwesomeIcon icon={faArrowLeft} className={style.returnButtonIcon} />
      Back
    </div>
  );
};

export default ReturnButton;
