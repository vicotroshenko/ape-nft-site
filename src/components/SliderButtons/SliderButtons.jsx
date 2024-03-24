import styles from "./SliderButtons.module.css";

const SliderButtons = ({ onClick }) => {
  return (
    <div className={styles.buttons}>
      <button
        type="button"
        name="prev"
        onClick={onClick}
        aria-label="open prev card"
      >
        Prev
      </button>
      <button
        type="button"
        name="next"
        onClick={onClick}
        aria-label="open next card"
      >
        Next
      </button>
    </div>
  );
};

export default SliderButtons;
