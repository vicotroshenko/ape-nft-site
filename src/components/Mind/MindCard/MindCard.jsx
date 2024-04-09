import PropTypes from "prop-types";
import styles from "./MindCard.module.css";

const MindCard = ({ title, text }) => {
  return (
    <div className={styles.container}>
      <p>{text}</p>
      <h4>{title}</h4>
    </div>
  );
};

MindCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default MindCard;
