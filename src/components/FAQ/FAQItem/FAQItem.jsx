import styles from "./FAQItem.module.css";
import { useRef } from "react";

const FAQItem = ({ title, text, image, number, isOpen, onClick }) => {
  const contentHeight = useRef();

  return (
    <div className={`${styles.wrapper} ${isOpen ? styles.activeCard : ""}`}>
      {isOpen && (
        <div className={styles.accordionImage}>
          <img src={image} alt={title} />
        </div>
      )}
      <div className={styles.content}>
        <button className={styles.titleButton} onClick={onClick}>
          <p
            className={`${styles.titleNumber} ${
              isOpen ? styles.activeNumber : ""
            }`}
          >
            [ {number} ]
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
              ? {
                  height: contentHeight.current?.scrollHeight,
                  visibility: "visible",
                }
              : { height: "0px", visibility: "hidden" }
          }
        >
          <p className={styles.textContent}>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
