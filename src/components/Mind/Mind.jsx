import MindCard from "./MindCard/MindCard";
import Container from "../Container/Container";
import styles from "./Mind.module.css";
import { ReactComponent as ArrowIcon } from "../../images/svg/up-left-arrow.svg";
import { useState } from "react";
import SubTitle from "../SubTitle/SubTitle";
import SliderButtons from "../SliderButtons/SliderButtons";
import { mindCollection } from "../../data/mind";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";

const Mind = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

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
      <SubTitle>mind map</SubTitle>
      <div className={styles.sliderContainer}>
        <ul className={styles.slider}>
          {isMobile ? (
            <Swiper spaceBetween={24} slidesPerView={1} onSwiper={setSwiperRef}>
              {mindCollection.map(({ text, title, id }) => (
                <SwiperSlide key={id}>
                  <MindCard text={text} title={title} />
                </SwiperSlide>
              ))}
              <SwiperSlide>
                <li>
                  <a
                    href="https://www.google.com.ua/"
                    className={styles.lastItemLink}
                  >
                    <ArrowIcon className={styles.arrowIcon} />
                    <h4 className={styles.lastItemTitle}>
                      Learn more in mind map
                    </h4>
                  </a>
                </li>
              </SwiperSlide>
            </Swiper>
          ) : (
            <>
              {" "}
              {mindCollection.map(({ text, title, id }) => (
                <MindCard text={text} title={title}  key={id}/>
              ))}
              <li>
                <a
                  href="https://www.google.com.ua/"
                  className={styles.lastItemLink}
                >
                  <ArrowIcon className={styles.arrowIcon} />
                  <h4 className={styles.lastItemTitle}>
                    Learn more in mind map
                  </h4>
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className={styles.tableHidden}>
        <SliderButtons onClick={handleCardClick} />
      </div>
    </Container>
  );
};

export default Mind;
