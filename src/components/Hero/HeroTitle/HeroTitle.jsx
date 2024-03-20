import styles from "./HeroTitle.module.css";

const HeroTitle = () => {
  return (
    <div className={styles.titleContainer}>
      <p>diD yOu seE iT ?</p>
      <h1>
        <span>yacht</span>
        <span>apes</span>
      </h1>
      <p>Apes aRe eveRywhere</p>
    </div>
  );
};

export default HeroTitle;
