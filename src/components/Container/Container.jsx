import PropTypes from "prop-types";
import styles from "./Container.module.css";

const Container = ({ id, children }) => {
  return (
    <section className={styles.section} id={id}>
      <div className={styles.container}>{children}</div>
    </section>
  );
};

Container.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Container;
