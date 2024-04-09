import contents from "../../data/about.json";
import imageMobile from "../../images/png/about_mobile.png";
import imageMobile2x from "../../images/png/about_mobile_2x.png";
import imageTablet from "../../images/png/about_tablet.png";
import imageTablet2x from "../../images/png/about_tablet_2x.png";
import imageDesctop from "../../images/png/about_desctop.png";
import imageDesctop2x from "../../images/png/about_desctop_2x.png";
import { getPartText } from "../../helpers/getPartText";
import DelimitedText from "../DelimitedText/DelimitedText";
import Container from "../Container/Container";
import SloganLine from "./SloganLine/SloganLine";
import styles from "./About.module.css";

const About = () => {
  const { title, text1, text2 } = contents;
  const titleLength = title.split(" ").length;
  const text1Length = text1.split(" ").length;

  const titlePart1 = getPartText(title, 0, titleLength - 3);
  const titlePart2 = getPartText(title, titleLength - 3, titleLength - 1);
  const titleLastWord = getPartText(title, titleLength - 1, titleLength);

  const text1NoLastWord = getPartText(text1, 0, text1Length - 1);
  const text1LastWord = getPartText(text1, text1Length - 1, text1Length);

  return (
    <Container id="about">
      <div className={styles.about}>
        <h2 className={styles.title}>
          {titlePart1}
          <span className={styles.red}> {titlePart2}</span>
          <span className={`${styles.red} ${styles.divideLastWordTitle}`}>
            {" "}
            {titleLastWord}
          </span>
        </h2>

        <p className={styles.text1}>
          {text1NoLastWord}
          <span className={styles.text1LastWordDivider}> {text1LastWord}</span>
        </p>

        <div className={styles.text2Wrapper}>
          <DelimitedText placement="about">{text2}</DelimitedText>
        </div>

        <picture className={styles.picture}>
          <source
            srcSet={`${imageTablet} 1x, ${imageTablet2x} 2x`}
            media="(min-width: 768px) and (max-width: 1279px)"
          />
          <source
            srcSet={`${imageDesctop} 1x, ${imageDesctop2x} 2x`}
            media="(min-width: 1280px)"
          />
          <img
            srcSet={`${imageMobile} 1x, ${imageMobile2x} 2x`}
            src={imageMobile}
            alt="monkey in sunglasses and cap"
            loading="lazy"
          />
        </picture>
      </div>
      <SloganLine />
    </Container>
  );
};

export default About;
