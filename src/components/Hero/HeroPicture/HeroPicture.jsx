import styles from "./HeroPicture.module.css";
import mobileImage from "../../../images/png/hero_mobile.png";
import tabletImage from "../../../images/png/hero_tablet.png";
import desctopImage from "../../../images/png/hero_desctop.png";

const HeroPicture = () => {
  return (
    <picture className={styles.picture}>
      <source
        srcSet={tabletImage}
        media="(min-width: 768px) and (max-width: 1279px)"
      />
      <source srcSet={desctopImage} media="(min-width: 1280px)" />
      <img src={mobileImage} alt="A monkey in glasses and costume" />
    </picture>
  );
};

export default HeroPicture;
