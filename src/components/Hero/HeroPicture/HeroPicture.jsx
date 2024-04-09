import mobileImage from "../../../images/png/hero_mobile.png";
import mobileImage2x from "../../../images/png/hero_mobile_2x.png";
import tabletImage from "../../../images/png/hero_tablet.png";
import tabletImage2x from "../../../images/png/hero_tablet_2x.png";
import desctopImage from "../../../images/png/hero_desctop.png";
import desctopImage2x from "../../../images/png/hero_desctop_2x.png";
import styles from "./HeroPicture.module.css";

const HeroPicture = () => {
  return (
    <picture className={styles.picture}>
      <source
        srcSet={`${tabletImage} 1x, ${tabletImage2x} 2x`}
        media="(min-width: 768px) and (max-width: 1279px)"
      />
      <source
        srcSet={`${desctopImage} 1x, ${desctopImage2x} 2x`}
        media="(min-width: 1280px)"
      />
      <img
        srcSet={`${mobileImage} 1x, ${mobileImage2x} 2x`}
        src={mobileImage}
        alt="A monkey in glasses and costume"
        loading="lazy"
      />
    </picture>
  );
};

export default HeroPicture;
