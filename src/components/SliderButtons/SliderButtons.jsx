import styles from './SliderButtons.module.css';


const SliderButtons = ({onClick, disabledPrev, disabledNext}) => {
	return (
		<div className={styles.buttons}>
        <button
          type="button"
          name="prev"
          onClick={onClick}
          aria-label="open prev card"
          disabled={disabledPrev}
        >
          Prev
        </button>
        <button
          type="button"
          name="next"
          onClick={onClick}
          aria-label="open next card"
          disabled={disabledNext}
        >
          Next
        </button>
      </div>
	)
}

export default SliderButtons