import style from "./style/ButtonOpenLink.module.css";

const ButtonOpenLink = ({ link, text, className }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className={`${className} ${style.buttonOpenLink}`}>
            {text}
        </a>
    );
}

export default ButtonOpenLink;