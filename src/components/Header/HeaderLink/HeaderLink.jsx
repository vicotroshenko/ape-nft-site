import { forwardRef } from "react";
import PropTypes from "prop-types";
import styles from "./HeaderLink.module.css";

const HeaderLink = forwardRef(
  ({ children, link, linkName, visible, openMenu }, ref) => {

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
      <a
        href={link}
        className={getStyles()}
        aria-label={`link to ${linkName}`}
        target="_blank"
        rel="noopener noreferrer nofollow"
        ref={ref}
      >
        {children}
      </a>
    );
  }
);

HeaderLink.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
  linkName: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  openMenu: PropTypes.bool.isRequired,
};

export default HeaderLink;
