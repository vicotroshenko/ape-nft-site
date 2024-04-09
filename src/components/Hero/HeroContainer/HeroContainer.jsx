import PropTypes from "prop-types";
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

HeroContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeroContainer;
