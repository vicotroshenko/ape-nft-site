import { ReactComponent as AddIcon } from "../../../images/svg/add-sharp.svg";
import contents from "../../../data/about.json";
import styles from "./SloganLine.module.css";

const SloganLine = () => {
  const { line } = contents;
  return (
    <div className={styles.sloganLine}>
      <ul className={styles.sloganList}>
        <li>{line.text1}</li>
        <li>
          <AddIcon className={styles.crossIcon} aria-label="the cross icon"/>
        </li>
        <li>{line.text2}</li>
        <li>
          <AddIcon className={styles.crossIcon} aria-label="the cross icon"/>
        </li>
        <li>{line.text3}</li>
      </ul>
      <ul className={styles.sloganList}>
        <li>{line.text1}</li>
        <li>
          <AddIcon className={styles.crossIcon} />
        </li>
        <li>{line.text2}</li>
        <li>
          <AddIcon className={styles.crossIcon} aria-label="the cross icon"/>
        </li>
        <li>{line.text3}</li>
      </ul>
      <ul className={styles.sloganList}>
        <li>{line.text1}</li>
        <li>
          <AddIcon className={styles.crossIcon} />
        </li>
        <li>{line.text2}</li>
        <li>
          <AddIcon className={styles.crossIcon} />
        </li>
        <li>{line.text3}</li>
      </ul>
    </div>
  );
};

export default SloganLine;
