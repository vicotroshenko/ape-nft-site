import styles from "./SubTitle.module.css";

const SubTitle = ({ children }) => {
  return <h3 className={styles.title}>{children}</h3>;
};

export default SubTitle;
