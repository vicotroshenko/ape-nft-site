import MindCard from "./MindCard/MindCard";
import Container from "../Container/Container";
import styles from "./Mind.module.css";
import { ReactComponent as ArrowIcon } from "../../images/svg/up-left-arrow.svg";
import { useState } from "react";

const mindCollection = [
  {
    text: "All owners of APE NFTs and all future collections will receive a percentage of sales based on the number of NFTs they own",
    title: "YAPE DROP",
    id: "0001",
  },
  {
    text: "Launch of the 2nd YACHT Collection Releasing the first version of the Ape Slam Game",
    title: "New Collection",
    id: "0002",
  },
  {
    text: "Launch your own token, the proceeds of which will go to a global fund to LAUNCH YACHT CLUB AND PROMOTE it",
    title: "Token",
    id: "0003",
  },
];

const prev = "prev";
const next = "next";

const Mind = () => {
  const [cardNum, setCardNum] = useState(0);

  const handleCardClick = (e) => {
    const { name } = e.currentTarget;
    switch (name) {
      case prev:
        setCardNum((prev) => prev - 1);
        break;
      case next:
        setCardNum((prev) => prev + 1);
        break;
      default:
        return;
    }
  };

  return (
    <Container>
      <h3 style={{ marginBottom: "30px", textAlign: "center" }}>mind map</h3>
      <div
        className={styles.sliderContainer}
        style={{ "--slide": `${cardNum}` }}
      >
        <ul className={styles.slider}>
          {mindCollection.map(({ text, title, id }) => (
            <MindCard text={text} title={title} key={id} />
          ))}
          <li>
            <a
              href="https://www.google.com.ua/"
              className={styles.lastItemLink}
            >
              <ArrowIcon className={styles.arrowIcon} />
              <h4 className={styles.lastItemTitle}>Learn more in mind map</h4>
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.buttons}>
        <button
          type="button"
          name={prev}
          onClick={handleCardClick}
          aria-label="open prev card"
          disabled={cardNum === 0}
        >
          Prev
        </button>
        <button
          type="button"
          name={next}
          onClick={handleCardClick}
          aria-label="open next card"
          disabled={cardNum === mindCollection.length}
        >
          Next
        </button>
      </div>
    </Container>
  );
};

export default Mind;
