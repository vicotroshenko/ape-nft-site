import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
import contents from "../../data/mind.json";
import { getPartText } from "../../helpers/getPartText";
import { ReactComponent as ArrowIcon } from "../../images/svg/up-left-arrow.svg";
import mind from "../../data/mind.json";
import Container from "../Container/Container";
import SliderButtons from "../SliderButtons/SliderButtons";
import SubTitle from "../SubTitle/SubTitle";
import MindCard from "./MindCard/MindCard";
import styles from "./Mind.module.css";

const Mind = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const lastItemText1 = getPartText(contents.lastItem, 0, 1);
  const lastItemText2 = getPartText(contents.lastItem, 1, 2);
  const lastItemText3 = getPartText(contents.lastItem, 2, contents.lastItem.split(" ").length);
  
  const handleCardClick = (e) => {
    const { name } = e.currentTarget;

    if (name === "prev") {
      swiperRef.slidePrev();
    }
    if (name === "next") {
      swiperRef.slideNext();
    }
  };

  return (
    <Container id="mind">
      <SubTitle>{mind.title}</SubTitle>
      <div className={styles.sliderContainer}>
        <div className={styles.slider}>
          {isMobile ? (
            <Swiper spaceBetween={24} slidesPerView={1} onSwiper={setSwiperRef} wrapperTag="ul">
              {mind.data.map(({ text, title, id }) => (
                <SwiperSlide key={id} tag="li">
                  <MindCard text={text} title={title} />
                </SwiperSlide>
              ))}
              <SwiperSlide tag="li">
                  <a
                    href="https://www.google.com.ua/"
                    aria-label="link to google"
                    className={styles.lastItemLink}
                  >
                    <ArrowIcon className={styles.arrowIcon} aria-label="arrow-top-right icon"/>
                    <h4 className={styles.lastItemTitle}>
                      {lastItemText1}
                      <span className={styles.divider}>{lastItemText2}</span>
                      <span className={styles.divider}>{lastItemText3}</span>
                    </h4>
                  </a>
              </SwiperSlide>

            </Swiper>
          ) : (
            <>
              {" "}
              {mind.data.map(({ text, title, id }) => (
                <MindCard text={text} title={title}  key={id}/>
              ))}
              <div>
                <a
                  href="https://www.google.com.ua/"
                  className={styles.lastItemLink}
                >
                  <ArrowIcon className={styles.arrowIcon} />
                  <h4 className={styles.lastItemTitle}>
                      {lastItemText1}
                      <span className={styles.divider}>{lastItemText2}</span>
                      <span className={styles.divider}>{lastItemText3}</span>
                    </h4>
                </a>
              </div>
            </>
          )}
        </div>
      </div>
      <div className={styles.tableHidden}>
        <SliderButtons onClick={handleCardClick} lineHeight="1"/>
      </div>
    </Container>
  );
};

export default Mind;
