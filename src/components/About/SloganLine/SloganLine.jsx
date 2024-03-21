import styles from "./SloganLine.module.css";
import { ReactComponent as AddIcon } from "../../../images/svg/add-sharp.svg";

const SloganLine = () => {
  return (
    <div className={styles.sloganLine}>
      <ul className={styles.sloganList}>
        <li>Destroy stereotypes</li>
        <li>
          <AddIcon className={styles.crossIcon} />
        </li>
        <li>HAVE NO LIMITS</li>
        <li>
          <AddIcon className={styles.crossIcon} />
        </li>
        <li>Break rules</li>
      </ul>
    </div>
  );
};

export default SloganLine;
