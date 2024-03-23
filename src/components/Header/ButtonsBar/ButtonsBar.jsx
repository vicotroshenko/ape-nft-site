import styles from "./ButtonsBar.module.css";
import HeaderButton from "../HeaderButton/HeaderButton";
import { useState } from "react";

const ButtonsBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuToggle = () => setOpenMenu((prev) => !prev);

  const getViewElement = (element) => {
    setOpenMenu(false);
    document.querySelector(element).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.openButtons}>
      <HeaderButton
        visibleMenu={openMenu}
        name="anchor"
        onClick={() => getViewElement("#about")}
      >
        about
      </HeaderButton>
      <HeaderButton
        visibleMenu={openMenu}
        name="anchor"
        onClick={() => getViewElement("#mind")}
      >
        m-map
      </HeaderButton>
      <HeaderButton
        visibleMenu={openMenu}
        name="anchor"
        onClick={() => getViewElement("#faq")}
      >
        faq
      </HeaderButton>
      <HeaderButton
        visibleMenu={openMenu}
        name="anchor"
        onClick={() => getViewElement("#arts")}
      >
        arts
      </HeaderButton>
      <HeaderButton
        visibleMenu={openMenu}
        name="anchor"
        onClick={() => getViewElement("#contact")}
      >
        mint
      </HeaderButton>
      <HeaderButton visibleMenu={openMenu} name="toggle" onClick={menuToggle}>
        {openMenu ? "Close" : "Menu"}
      </HeaderButton>
    </div>
  );
};

export default ButtonsBar;
