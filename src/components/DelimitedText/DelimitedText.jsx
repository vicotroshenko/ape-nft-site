import PropTypes from "prop-types";
import { ReactComponent as AddIcon } from "../../images/svg/add-sharp.svg";
import styles from "./DelimitedText.module.css";

const DelimitedText = ({ children, placement }) => {
  return (
    <div className={styles.text2Wrapper}>
      <AddIcon
        className={`${styles.text2Icon} ${styles[placement]}`}
        aria-label="the cross icon"
      />
      <div className={`${styles.text2} ${styles[placement]}`}>{children}</div>
    </div>
  );
};

DelimitedText.propTypes = {
  placement: PropTypes.oneOf(["about", "contact"]).isRequired,
  children: PropTypes.node.isRequired,
};

export default DelimitedText;
