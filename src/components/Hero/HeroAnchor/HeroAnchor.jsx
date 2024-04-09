import contents from "../../../data/hero.json";
import buttonsName from "../../../data/buttons.json";
import styles from "./HeroAnchor.module.css";

const HeroAnchor = () => {
  const { greetingText } = contents;
  const getViewElement = (element) =>
    document.querySelector(element).scrollIntoView({
      behavior: "smooth",
    });

  return (
    <div className={styles.meetAnchor}>
      <p>{greetingText}</p>
      <button type="button" onClick={() => getViewElement("#contact")}>
        {buttonsName.meet}
      </button>
    </div>
  );
};

export default HeroAnchor;
