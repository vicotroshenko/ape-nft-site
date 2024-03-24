import styles from "./Logo.module.css";
import { ReactComponent as LogoIcon } from "../../../images/svg/headerLogo.svg";

const Logo = ({ visible=true, fill }) => {
  return (
    <div className={!visible ? styles.hidden : {}}>
      <a href="https://vicotroshenko.github.io/ape-nft-site/" className={styles.linkLogo}>
        <LogoIcon className={styles.logo} style={{fill}} />
      </a>
    </div>
  );
};

export default Logo;
