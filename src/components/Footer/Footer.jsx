import contents from "../../data/footer.json";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerContent}>
        {contents.footerText}
      </p>
    </footer>
  );
};

export default Footer;
