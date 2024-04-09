import { useState } from "react";
import contents from "../../data/faq.json";
import Container from "../Container/Container";
import SubTitle from "../SubTitle/SubTitle";
import FAQItem from "./FAQItem/FAQItem";
import pictures from "./pictures";
import styles from "./FAQ.module.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState("11111");

  const { title, accordion } = contents;

  const handleItemClick = (id) => {
    setActiveIndex(id);
  };

  return (
    <Container id="faq">
      <SubTitle>{title}</SubTitle>
      <ul className={styles.itemsWrapper}>
        {pictures.map(({ image, image2x }, index) => (
          <FAQItem
            title={accordion[index].title}
            text={accordion[index].text}
            image={image}
            image2x={image2x}
            number={index + 1}
            isOpen={activeIndex === accordion[index].id}
            onClick={() => handleItemClick(accordion[index].id)}
            key={accordion[index].id}
          />
        ))}
      </ul>
    </Container>
  );
};

export default FAQ;
