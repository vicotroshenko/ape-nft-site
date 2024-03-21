import Container from "../Container/Container";
import { ReactComponent as AddIcon } from "../../images/svg/add-sharp.svg";
import styles from "./About.module.css";
import imageMobile from "../../images/png/about_mobile.png";
import imageTablet from "../../images/png/about_tablet.png";
import imageDesctop from "../../images/png/about_desctop.png";
import SloganLine from "./SloganLine/SloganLine";

const About = () => {
  return (
    <Container>
      <div className={styles.about}>
        <h2 className={styles.title}>
          <span>a Story </span>
          <span>that </span>
          <span>started </span>
          <span>
            with <span className={styles.red}>one</span>
          </span>
          <span className={styles.red}> simple</span>
          <span className={styles.red}> ape</span>
        </h2>

        <div className={styles.text1}>
          <span>WHO GOT</span>
          <span> FED UP WITH BORING</span>
          <span> AND HYPOCRITIC</span>
          <span> COMMONPLACE</span>
          <span> THIS IS</span>
          <span> HOW THE IDEA OF</span>
          <span> ESCAPING AND DYNAMIC</span>
          <span> JOURNEY ON THE</span>
          <span> YACHT</span>
        </div>

        <div className={styles.text2Wrapper}>
          <AddIcon className={styles.text2Icon} />
          <div className={styles.text2}>
            EACH ARTWORK IN THE COLLECTION TELLS A STORY OF ONE JOURNEY. ARTS
            ARE RANDOMLY GENERATED BY USERS
          </div>
        </div>

        <picture className={styles.picture}>
          <source
            srcSet={imageTablet}
            media="(min-width: 768px) and (max-width: 1279px)"
          />
          <source srcSet={imageDesctop} media="(min-width: 1280px)" />
          <img src={imageMobile} alt="monkey in sunglasses and cap" />
        </picture>
      </div>
      <SloganLine />
    </Container>
  );
};

export default About;