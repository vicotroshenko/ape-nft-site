import { forwardRef } from "react";
import styles from "./HeaderLink.module.css";

const HeaderLink = forwardRef(({ children, link, visible, openMenu }, ref) => {
  const getStyles = () => {
    if (!visible && !openMenu) {
      return `${styles.link}`;
    }
    if (!visible && openMenu) {
      return `${styles.link} ${styles.mobileOpen}`;
    }
    if (visible && openMenu) {
      return `${styles.link} ${styles.light}`;
    }
    if (visible && !openMenu) {
      return `${styles.link} ${styles.hidden}`;
    }
  };

  return (
    <a href={link} className={getStyles()} target="blank" ref={ref}>
      {children}
    </a>
  );
});

export default HeaderLink;
