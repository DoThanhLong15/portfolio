import { useState } from "react";
import style from "./Header.module.css";

const Header = () => {
  const [navItem, setNavItem] = useState([
    {
      active: true,
      text: "home",
      link: "#",
    },
    {
      active: false,
      text: "about-me",
      link: "#",
    },
    {
      active: false,
      text: "works",
      link: "#",
    },
    {
      active: false,
      text: "contacts",
      link: "#",
    },
  ]);

  const handleNavItemClick = (index) => {
    setNavItem((prevNavItem) =>
      prevNavItem.map((item, i) => ({
        ...item,
        active: i === index,
      }))
    );
  };

  return (
    <>
      <div className={`${style.header} flex`}>
        <div className={style.title}>
          <img
            className={style.pageLogo}
            src="/assets/images/pageLogo.png"
            alt="pageLogo"
          />
          Long
        </div>

        <div className={`${style.navBar} flex`}>
          {navItem &&
            navItem.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className={`${style.navItem} ${item.active ? style.active : ""}`}
                onClick={() => handleNavItemClick(index)}
              >
                #<span className={style.navItemText}>{item.text}</span>
              </a>
            ))}
        </div>
      </div>
    </>
  );
};

export default Header;
