import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import contents from "../../data/arts.json";
import Container from "../Container/Container";
import SubTitle from "../SubTitle/SubTitle";
import SliderButtons from "../SliderButtons/SliderButtons";
import pictures from "./pictures";
import styles from "./Arts.module.css";
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
      <SubTitle>{contents.title}</SubTitle>
      <div className={styles.sliderContainer}>
        <Swiper
          spaceBetween={24}
          slidesPerView={showItems}
          onSwiper={setSwiperRef}
          wrapperTag="ul"
        >
          {pictures.map(
            (
              { mobileImage, mobileImage2x, desctopImage, desctopImage2x, id },
              index
            ) => (
              <SwiperSlide key={id} tag="li">
                <div className={styles.item}>
                  <picture className={styles.pictureContainer}>
                    <source
                      srcSet={`${desctopImage} 1x, ${desctopImage2x} 2x`}
                      media="(min-width: 1280px)"
                    />
                    <source
                      srcSet={`${mobileImage} 1x, ${mobileImage2x} 2x`}
                      media="(max-width: 1279px)"
                    />
                    <img
                      src={mobileImage}
                      alt={`slide ${index}`}
                      loading="lazy"
                    />
                  </picture>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
      <SliderButtons onClick={handleCardClick} lineHeight="1.25" />
    </Container>
  );
};

export default Arts;
