import PropTypes from "prop-types";
import contains from "../../../data/buttons.json";
import HeaderButton from "../HeaderButton/HeaderButton";
import styles from "./ButtonsBar.module.css";

const ButtonsBar = ({
  openMenu = false,
  openMobileMenu = false,
  onClick,
  onToggle,
}) => {
  const { headerButtons } = contains;
  return (
    <div className={styles.openButtons}>
      <HeaderButton
        visibleMenu={openMenu}
        name="anchor"
        onClick={() => onClick("#about")}
      >
        {headerButtons.about}
      </HeaderButton>
      <HeaderButton
        visibleMenu={openMenu}
        name="anchor"
        onClick={() => onClick("#mind")}
      >
        {headerButtons.map}
      </HeaderButton>
      <HeaderButton
        visibleMenu={openMenu}
        name="anchor"
        onClick={() => onClick("#faq")}
      >
        {headerButtons.faq}
      </HeaderButton>
      <HeaderButton
        visibleMenu={openMenu}
        name="anchor"
        onClick={() => onClick("#arts")}
      >
        {headerButtons.arts}
      </HeaderButton>
      <HeaderButton
        visibleMenu={openMenu}
        name="anchor"
        onClick={() => onClick("#contact")}
      >
        {headerButtons.mint}
      </HeaderButton>

      <HeaderButton
        visibleMenu={openMenu || openMobileMenu}
        name="toggle"
        onClick={onToggle}
      >
        {openMenu || openMobileMenu ? headerButtons.close : headerButtons.open}
      </HeaderButton>
    </div>
  );
};

ButtonsBar.propTypes = {
  openMenu: PropTypes.bool,
  openMobileMenu: PropTypes.bool,
  onClick: PropTypes.func,
  onToggle: PropTypes.func.isRequired,
};

export default ButtonsBar;
