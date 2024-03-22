import MindCard from "./MindCard/MindCard";
import Container from "../Container/Container";
import styles from "./Mind.module.css";
import { ReactComponent as ArrowIcon } from "../../images/svg/up-left-arrow.svg";
import { useState } from "react";
import SubTitle from "../SubTitle/SubTitle";
import SliderButtons from "../SliderButtons/SliderButtons";
import { mindCollection } from "../../data/mind";


const Mind = () => {
  const [cardNum, setCardNum] = useState(0);

  const handleCardClick = (e) => {
    const { name } = e.currentTarget;

    if (name === "prev") {
      setCardNum((prev) => prev - 1);
    }
    if (name === "next") {
      setCardNum((prev) => prev + 1);
    }
  };

  return (
    <Container>
      <SubTitle>mind map</SubTitle>
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
      <div className={styles.tableHidden}>
        <SliderButtons
          onClick={handleCardClick}
          disabledPrev={cardNum === 0}
          disabledNext={cardNum === mindCollection.length}
        />
      </div>
    </Container>
  );
};

export default Mind;
