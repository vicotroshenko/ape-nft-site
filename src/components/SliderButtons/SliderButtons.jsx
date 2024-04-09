import PropTypes from "prop-types";
import contents from "../../data/buttons.json";
import styles from "./SliderButtons.module.css";

const SliderButtons = ({ onClick, lineHeight="1" }) => {
  return (
    <div className={styles.buttons}>
      <button
        type="button"
        name="prev"
        style={{lineHeight}}
        onClick={onClick}
        aria-label="open prev card"
      >
        {contents.prev}
      </button>
      <button
        type="button"
        name="next"
        style={{lineHeight}}
        onClick={onClick}
        aria-label="open next card"
      >
        {contents.next}
      </button>
    </div>
  );
};

SliderButtons.propTypes = {
  onClick: PropTypes.func.isRequired,
  lineHeight: PropTypes.string.isRequired,
};

export default SliderButtons;
