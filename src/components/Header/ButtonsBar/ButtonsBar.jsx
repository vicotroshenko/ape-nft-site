import styles from "./ButtonsBar.module.css";
import HeaderButton from "../HeaderButton/HeaderButton";

const ButtonsBar = ({
  openMenu = false,
  openMobileMenu = false,
  onClick,
  onToggle,
}) => {
  return (
    <div className={styles.openButtons}>
      <HeaderButton
        visibleMenu={openMenu}
        name="anchor"
        onClick={() => onClick("#about")}
      >
        about
      </HeaderButton>
      <HeaderButton
        visibleMenu={openMenu}
        name="anchor"
        onClick={() => onClick("#mind")}
      >
        m-map
      </HeaderButton>
      <HeaderButton
        visibleMenu={openMenu}
        name="anchor"
        onClick={() => onClick("#faq")}
      >
        faq
      </HeaderButton>
      <HeaderButton
        visibleMenu={openMenu}
        name="anchor"
        onClick={() => onClick("#arts")}
      >
        arts
      </HeaderButton>
      <HeaderButton
        visibleMenu={openMenu}
        name="anchor"
        onClick={() => onClick("#contact")}
      >
        mint
      </HeaderButton>

      <HeaderButton
        visibleMenu={openMenu || openMobileMenu}
        name="toggle"
        onClick={onToggle}
      >
        {openMenu || openMobileMenu ? "Close" : "Menu"}
      </HeaderButton>
    </div>
  );
};

export default ButtonsBar;
