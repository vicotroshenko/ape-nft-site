import styles from "./Container.module.css";

const Container = ({ children }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>{children}</div>
    </section>
  );
};

export default Container;
