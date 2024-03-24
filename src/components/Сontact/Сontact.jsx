import styles from "./Сontact.module.css";
import Container from "../Container/Container";
import SubTitle from "../SubTitle/SubTitle";
import DelimitedText from "../DelimitedText/DelimitedText";
import discordIcon from "../../images/png/discord.png";
import foxIcon from "../../images/png/Logos.png";
import { useForm } from "react-hook-form";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Сontact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    toast.success(`Success! ${data.username} Welcome to our community`, {
      position: "top-center",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  return (
    <>
      <ToastContainer />
      <Container id="contact">
        <SubTitle>are you in?</SubTitle>
        <div className={styles.text2Wrapper}>
          <DelimitedText>
            Join the YACHT APE community to be one of the first to receive our
            limited edition NFT
          </DelimitedText>
        </div>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div role="group">
            <label className={styles.label}>
              <span className={styles.beforeIcon}>
                <img src={discordIcon} alt="user field icon" loading="lazy" />
              </span>
              <input
                type="text"
                {...register("username", {
                  required: true,
                  pattern: /@[^@]\S[A-Za-z0-9]+$/,
                  minLength: 6,
                })}
                className={
                  errors.username
                    ? `${styles.field} ${styles.errorField}`
                    : `${styles.field}`
                }
                placeholder="@USERNAME"
              />
              <span className={styles.message}>
                {errors.username && "Wrong discord"}
              </span>
            </label>

            <label className={styles.label}>
              <span className={styles.beforeIcon}>
                <img src={foxIcon} alt="wallet field icon" loading="lazy" />
              </span>
              <input
                type="text"
                {...register("wallet", {
                  required: true,
                  pattern: /^\S[A-Za-z0-9]+$/,
                  minLength: 6,
                })}
                className={
                  errors.wallet
                    ? `${styles.field} ${styles.errorField}`
                    : `${styles.field}`
                }
                placeholder="WALLET ADDRESS"
              />
              <span className={styles.message}>
                {errors.wallet && "Wrong address"}
              </span>
            </label>
            <button type="submit" className={styles.button}>
              mint
            </button>
          </div>
        </form>
      </Container>
    </>
  );
};

export default Сontact;
