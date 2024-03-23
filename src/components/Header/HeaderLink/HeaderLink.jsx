import { useElementOnScreen } from "../../../hooks/useElementOnScreen";
import styles from "./HeaderLink.module.css";

const HeaderLink = ({ children, link }) => {
  const [containerRef, visible] = useElementOnScreen({
    marginTop: 30,
  });

  return (
    <a
      href={link}
      className={!visible ? styles.link : `${styles.link} ${styles.light}`}
      target="blank"
      ref={containerRef}
    >
      {children}
    </a>
  );
};

export default HeaderLink;
