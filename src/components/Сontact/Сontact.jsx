import { useForm } from "react-hook-form";
import { useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import contains from "../../data/contact.json";
import buttonsNames from "../../data/buttons.json";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import Container from "../Container/Container";
import SubTitle from "../SubTitle/SubTitle";
import DelimitedText from "../DelimitedText/DelimitedText";
import styles from "./Сontact.module.css";
import "react-toastify/dist/ReactToastify.css";

const Сontact = () => {
  const { formButton } = buttonsNames;
  const defaultValue = { username: "", wallet: "" };
  const [user, setUser] = useLocalStorage("user", defaultValue);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    reset();
    setUser(defaultValue);
    setSuccess(true);
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

  const isError = errors.username || errors.wallet ? true : false;

  return (
    <>
      <ToastContainer />
      <Container id="contact">
        <SubTitle>{contains.title}</SubTitle>
        <div className={styles.text2Wrapper}>
          <DelimitedText placement="contact">{contains.text}</DelimitedText>
        </div>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div role="group">
            <label className={styles.label}>
              <input
                type="text"
                {...register("username", {
                  required: true,
                  pattern: /@[^@]\S[A-Za-z0-9]+$/,
                  minLength: 6,
                  value: user.username,
                  onChange: (e) =>
                    setUser({ ...user, username: e.target.value }),
                })}
                className={
                  errors.username
                    ? `${styles.field} ${styles.errorField}`
                    : `${styles.field}`
                }
                placeholder={contains.placeholderUser}
              />
              <span className={styles.message}>
                {errors.username && "Wrong discord"}
              </span>
            </label>

            <label className={styles.label}>
              <input
                type="text"
                {...register("wallet", {
                  required: true,
                  pattern: /^\S[A-Za-z0-9]+$/,
                  minLength: 6,
                  value: user.wallet,
                  onChange: (e) => setUser({ ...user, wallet: e.target.value }),
                })}
                className={
                  errors.wallet
                    ? `${styles.field} ${styles.errorField}`
                    : `${styles.field}`
                }
                placeholder={contains.placeholderWallet}
              />
              <span className={styles.message}>
                {errors.wallet && "Wrong address"}
              </span>
            </label>
            <button type="submit" className={styles.button}>
              {!isError
                ? success
                  ? formButton.success
                  : formButton.default
                : formButton.error}
            </button>
          </div>
        </form>
      </Container>
    </>
  );
};

export default Сontact;
