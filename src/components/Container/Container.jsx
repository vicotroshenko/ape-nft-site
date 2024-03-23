import styles from "./Container.module.css";

const Container = ({ id, children }) => {
  return (
    <section className={styles.section} id={id}>
      <div className={styles.container}>{children}</div>
    </section>
  );
};

export default Container;
