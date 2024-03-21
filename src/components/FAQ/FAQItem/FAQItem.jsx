import styles from "./FAQItem.module.css";
import { useRef } from "react";

const FAQItem = ({ title, text, isOpen, onClick }) => {
  const contentHeight = useRef();

  return (
    <div className={`${styles.wrapper} ${
      isOpen ? styles.activeCard : ""
    }`}>
      <button className={styles.titleButton} onClick={onClick}>
        <p
          className={`${styles.titleNumber} ${
            isOpen ? styles.activeNumber : ""
          }`}
        >
          [ 1 ]
        </p>
        <p className={`${styles.title} ${isOpen ? styles.active : ""}`}>
          {title}
        </p>
      </button>
      <div
        ref={contentHeight}
        className={styles.textContainer}
        style={
          isOpen
            ? { height: contentHeight.current?.scrollHeight }
            : { height: "0px" }
        }
      >
        <p className={styles.textContent}>{text}</p>
      </div>
    </div>
  );
};

export default FAQItem;
