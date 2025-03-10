import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTitle } from "contexts/PageTitleContext";

import PageLogo from "components/others/PageLogo";

import style from "./Header.module.css";

const Header = () => {
  const { setTitle } = useTitle();
  const location = useLocation();
  const [navItem] = useState([
    {
      active: true,
      text: "home",
      link: "/",
      title: "Home"
    },
    {
      active: false,
      text: "about-me",
      link: "/about-me",
      title: "About me"
    },
    {
      active: false,
      text: "blog",
      link: "/blog",
      title: "Blog"
    },
    {
      active: false,
      text: "works",
      link: "/projects",
      title: "Works"
    },
    {
      active: false,
      text: "contacts",
      link: "/contact",
      title: "Contacts"
    },
  ]);


  useEffect(() => {
    const currentNavItem = navItem.find((item) => item.link === location.pathname);
    
    if (currentNavItem) {
      setTitle(currentNavItem.title);
    }
  }, [location.pathname, setTitle, navItem]);


  return (
    <>
      <div className={`${style.header} flex`}>
        <div className={style.title}>
          <PageLogo />
          Long
        </div>

        <div className={`${style.navBar} flex`}>
          {navItem &&
            navItem.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className={`${style.navItem} ${location.pathname === item.link ? style.active : ""}`}
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
