import { useElementOnScreen } from "../../../hooks/useElementOnScreen";
import styles from "./HeaderButton.module.css";

const HeaderButton = ({ children, onClick, visibleMenu, name }) => {
  const [containerRef, visible] = useElementOnScreen({
    marginTop: 30,
  });

  const getStyles = () => {
    if (name === "anchor" && !visibleMenu) {
      return `${styles.hidden}`;
    }
    if (name === "toggle" && !visibleMenu) {
      return `${styles.toggleClose}`;
    }
    if (name === "toggle" && visibleMenu) {
      return `${styles.mobileOpen}`;
    }
  };
  return (
    <button
      type="button"
      name={name}
      className={
        !visible
          ? `${styles.button} ${getStyles()}`
          : `${styles.button} ${styles.light} ${getStyles()}`
      }
      onClick={onClick}
      ref={containerRef}
    >
      {children}
    </button>
  );
};

export default HeaderButton;
