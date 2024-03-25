import styles from "./MindCard.module.css";

const MindCard = ({ title, text }) => {
  return (
    <div className={styles.container}>
      <p>{text}</p>
      <h4>{title}</h4>
    </div>
  );
};

export default MindCard;
