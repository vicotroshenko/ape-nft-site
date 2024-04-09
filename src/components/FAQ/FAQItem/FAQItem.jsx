import { useRef } from "react";
import PropTypes from "prop-types";
import styles from "./FAQItem.module.css";

const FAQItem = ({ title, text, image, image2x, number, isOpen, onClick }) => {
  const contentHeight = useRef();

  return (
    <li className={`${styles.wrapper} ${isOpen ? styles.activeCard : ""}`}>
      {isOpen && (
        <div className={styles.accordionImage}>
          <img
            srcSet={`${image} 1x, ${image2x} 2x`}
            alt={`NFT example number ${number}`}
            loading="lazy"
          />
        </div>
      )}
      <div className={styles.content}>
        <button className={styles.titleButton} onClick={onClick} aria-label="open text under the title">
          <p
            className={`${styles.titleNumber} ${
              isOpen ? styles.activeNumber : ""
            }`}
          >
            [ {number} ]
          </p>
          <h4 className={`${styles.title} ${isOpen ? styles.active : ""}`}>
            {title}
          </h4>
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
    </li>
  );
};

FAQItem.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string.isRequired,
  image2x: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FAQItem;
