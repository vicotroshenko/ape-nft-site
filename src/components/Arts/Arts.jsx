import styles from "./Arts.module.css";
import Container from "../Container/Container";
import SubTitle from "../SubTitle/SubTitle";
import SliderButtons from "../SliderButtons/SliderButtons";
import { artCollection } from "../../data/arts";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Arts = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const isDesctop = useMediaQuery({ query: "(min-width: 1280px)" });

  const getShowItems = (mobile, tablet, desctop) => {
    const mobileScreen = mobile && !tablet && !desctop;
    const tabletScreen = !mobile && tablet && !desctop;

    if (mobileScreen) {
      return 1;
    } else if (tabletScreen) {
      return 2;
    } else {
      return 4;
    }
  };

  const showItems = getShowItems(isMobile, isTablet, isDesctop);

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
    <Container id="arts">
      <SubTitle>COLLECTION</SubTitle>
      <div className={styles.sliderContainer}>
        <div>
          <Swiper
            spaceBetween={24}
            slidesPerView={showItems}
            onSwiper={setSwiperRef}
          >
            {artCollection.map(({ mobileImage, desctopImage, id }, index) => (
              <SwiperSlide key={id}>
                <div className={styles.item}>
                  <picture className={styles.pictureContainer}>
                    <source srcSet={desctopImage} media="(min-width: 1280px)" />
                    <img
                      src={mobileImage}
                      alt={`slide ${index}`}
                      loading="lazy"
                    />
                  </picture>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <SliderButtons onClick={handleCardClick} />
    </Container>
  );
};

export default Arts;
