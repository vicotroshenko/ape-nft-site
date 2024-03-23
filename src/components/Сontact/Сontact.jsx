import styles from "./Сontact.module.css";
import Container from "../Container/Container";
import SubTitle from "../SubTitle/SubTitle";
import DelimitedText from "../DelimitedText/DelimitedText";
import discordIcon from "../../images/png/discord.png";
import foxIcon from "../../images/png/Logos.png";

const Сontact = () => {
  return (
    <Container id="contact">
      <SubTitle>are you in?</SubTitle>
      <DelimitedText>
        Join the YACHT APE community to be one of the first to receive our
        limited edition NFT
      </DelimitedText>
      <form className={styles.form}>
        <div role="group">
          <label className={styles.label}>
            <span className={styles.beforeIcon}>
              <img src={discordIcon} alt="user field icon" loading="lazy" />
            </span>
            <input
              type="text"
              name="username"
              className={styles.field}
              placeholder="@USERNAME"
            />
            <span className={styles.message}></span>
          </label>

          <label className={styles.label}>
            <span className={styles.beforeIcon}>
              <img src={foxIcon} alt="wallet field icon" loading="lazy" />
            </span>
            <input
              type="text"
              name="wallet"
              className={styles.field}
              placeholder="WALLET ADDRESS"
            />
            <span className={styles.message}></span>
          </label>
          <button type="submit" className={styles.button}>
            mint
          </button>
        </div>
      </form>
    </Container>
  );
};

export default Сontact;
