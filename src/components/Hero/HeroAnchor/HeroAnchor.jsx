import styles from "./HeroAnchor.module.css";

const HeroAnchor = () => {
  const getViewElement = (element) =>
    document.querySelector(element).scrollIntoView({
      behavior: "smooth",
    });
    
  return (
    <div className={styles.meetAnchor}>
      <p>
        Yacht Ape is a collection of unique digital apes that you can own in NFT
        format
      </p>
      <button type="button" onClick={() => getViewElement("#contact")}>
        meet apes
      </button>
    </div>
  );
};

export default HeroAnchor;
