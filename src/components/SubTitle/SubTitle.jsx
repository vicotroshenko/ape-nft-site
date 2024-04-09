import PropTypes from "prop-types";
import styles from "./SubTitle.module.css";

const SubTitle = ({ children }) => {
  return <h3 className={styles.title}>{children}</h3>;
};

SubTitle.propTypes = {
  onClick: PropTypes.node,
};

export default SubTitle;
