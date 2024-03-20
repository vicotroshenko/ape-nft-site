import styles from "./HeroContainer.module.css";

const HeroContainer = ({ children }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>{children}</div>
      </div>
    </section>
  );
};

export default HeroContainer;
