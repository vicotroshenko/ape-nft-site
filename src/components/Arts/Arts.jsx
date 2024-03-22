import styles from "./Arts.module.css";
import Container from "../Container/Container";
import SubTitle from "../SubTitle/SubTitle";
import { artCollection } from "../../data/arts";
import { useEffect, useRef, useState } from "react";
import SliderButtons from "../SliderButtons/SliderButtons";
import debounce from "lodash.debounce";

const Arts = () => {
  const [cardNum, setCardNum] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const sliderRef = useRef();

  const resizeHandler = (e) => {
    const width = e.currentTarget.innerWidth;
    setScreenWidth(width);
  };

  useEffect(() => {
    window.addEventListener("resize", debounce(resizeHandler, 500));
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  const getShowItems = (width) => {
    const mobileScreen = width < 768;
    const tabletScreen = width >= 768 && screenWidth < 1280;

    if (mobileScreen) {
      return { amount: 1, widthEl: 240 };
    } else if (tabletScreen) {
      return { amount: 2, widthEl: 308 };
    } else {
      return { amount: 4, widthEl: 264 };
    }
  };

  const showItems = getShowItems(screenWidth);

  const handleCardClick = (e) => {
    const { name } = e.currentTarget;

    if (name === "prev") {
      sliderRef.current.style.transform = `translateX(calc(-${
        showItems.widthEl
      }px * ${cardNum - 1}))`;

      setCardNum((prev) => prev - 1);
    }
    if (name === "next") {
      sliderRef.current.style.transform = `translateX(calc(-${
        showItems.widthEl
      }px * ${cardNum + 1}))`;

      setCardNum((prev) => {
        if (cardNum + showItems.amount > artCollection.length) {
          return prev;
        } else {
          return prev + 1;
        }
      });
    }
  };

  return (
    <Container>
      <SubTitle>COLLECTION</SubTitle>
      <div className={styles.sliderContainer}>
        <ul className={styles.list} ref={sliderRef}>
          {artCollection.map(({ mobileImage, desctopImage, id }, index) => (
            <li className={styles.item} key={id}>
              <picture className={styles.pictureContainer}>
                <source srcSet={desctopImage} media="(min-width: 1280px)" />
                <img src={mobileImage} alt={`slide ${index}`} loading="lazy" />
              </picture>
            </li>
          ))}
        </ul>
      </div>
      <SliderButtons
        onClick={handleCardClick}
        disabledPrev={cardNum === 0}
        disabledNext={cardNum + showItems.amount === artCollection.length}
      />
    </Container>
  );
};

export default Arts;
