import PropTypes from "prop-types";
import { ReactComponent as LogoIcon } from "../../../images/svg/headerLogo.svg";
import styles from "./Logo.module.css";

const Logo = ({ visible = true, openMenu = true }) => {
  return (
    <div className={!visible ? styles.hidden : {}}>
      <a
        href="https://vicotroshenko.github.io/ape-nft-site/"
        aria-label="link to main page"
        className={styles.linkLogo}
      >
        <LogoIcon
          className={openMenu ? `${styles.logo} ${styles.active}` : styles.logo}
        />
      </a>
    </div>
  );
};

Logo.propTypes = {
  visible: PropTypes.bool.isRequired,
  openMenu: PropTypes.bool,
};

export default Logo;
