import contents from "../../../data/hero.json";
import styles from "./HeroTitle.module.css";

const HeroTitle = () => {
  const { overText, title, underText } = contents;
  return (
    <div className={styles.titleContainer}>
      <p>{overText}</p>
      <h1>
        <span>{title.slice(0, 5)}</span>
        <span>{title.slice(5, title.length)}</span>
      </h1>
      <p className={styles.desctopRight}>{underText}</p>
    </div>
  );
};

export default HeroTitle;
