import ButtonsBar from "./ButtonsBar/ButtonsBar";
import styles from "./Header.module.css";
import LinkBar from "./LinksBar/LinksBar";
import { ReactComponent as Logo } from "../../images/svg/headerLogo.svg";
import { useEffect, useState } from "react";
import throttle from "lodash.throttle";

const Header = () => {
  const [visible, setVisible] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);

  const menuToggle = () => setOpenMenu((prev) => !prev);

  const getViewElement = (element) => {
    setOpenMenu(false);
    document.querySelector(element).scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && visible) {
        setVisible(false);
      }
      if (window.scrollY < 100 && !visible) {
        setVisible(true);
      }
    };
    window.addEventListener("scroll", throttle(handleScroll, 500));

    return () => window.removeEventListener("scroll", handleScroll);
  }, [visible]);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={!visible ? styles.hidden : {}}>
          <a href="/" className={styles.linkLogo}>
            <Logo className={styles.logo} />
          </a>
        </div>
        <div className={styles.buttonsWrapper}>
          <ButtonsBar
            openMenu={openMenu}
            onClick={getViewElement}
            onToggle={menuToggle}
          />
          <LinkBar openMenu={openMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
