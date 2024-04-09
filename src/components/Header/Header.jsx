import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import throttle from "lodash.throttle";
import Logo from "./Logo/Logo";
import ButtonsBar from "./ButtonsBar/ButtonsBar";
import LinkBar from "./LinksBar/LinksBar";
import MobileMenu from "./MobileMenu/MobileMenu";
import styles from "./Header.module.css";

const Header = () => {
  const [visible, setVisible] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

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
    <>
      {isMobile && (
        <MobileMenu
          toggle={menuToggle}
          visible={openMenu}
          getViewElement={getViewElement}
        />
      )}
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <Logo visible={visible} openMenu={openMenu} />

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
    </>
  );
};

export default Header;
