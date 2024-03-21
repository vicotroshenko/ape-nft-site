import styles from "./MindCard.module.css";

const MindCard = ({ title, text }) => {
  return (
    <li className={styles.container}>
      <p>{text}</p>
      <h4>{title}</h4>
    </li>
  );
};

export default MindCard;
