import styles from "./DelimitedText.module.css";
import { ReactComponent as AddIcon } from "../../images/svg/add-sharp.svg";

const DelimitedText = ({ children }) => {
  return (
    <div className={styles.text2Wrapper}>
      <AddIcon className={styles.text2Icon} />
      <div className={styles.text2}>{children}</div>
    </div>
  );
};

export default DelimitedText;
