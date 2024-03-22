import { useState } from "react";
import Container from "../Container/Container";
import FAQItem from "./FAQItem/FAQItem";
import SubTitle from "../SubTitle/SubTitle";
import styles from "./FAQ.module.css";
import { faqCollection } from "../../data/faq";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState("11111");

  const handleItemClick = (id) => {
    setActiveIndex(id);
  };

  return (
    <Container>
      <SubTitle>faq</SubTitle>
      <div className={styles.itemsWrapper}>
        {faqCollection.map(({ title, text, id, image }, index) => (
          <FAQItem
            title={title}
            text={text}
            image={image}
            number={index + 1}
            isOpen={activeIndex === id}
            onClick={() => handleItemClick(id)}
            key={id}
          />
        ))}
      </div>
    </Container>
  );
};

export default FAQ;
