import styles from "./HeroContainer.module.css";

const HeroContainer = ({ children }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>{children}</div>
    </section>
  );
};

export default HeroContainer;
