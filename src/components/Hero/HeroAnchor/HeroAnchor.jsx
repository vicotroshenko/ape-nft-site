import styles from "./HeroAnchor.module.css";

const HeroAnchor = () => {
  return (
    <div className={styles.meetAnchor}>
      <p>
        Yacht Ape is a collection of unique digital apes that you can own in NFT
        format
      </p>
      <button type="button">meet apes</button>
    </div>
  );
};

export default HeroAnchor;
