import { useState } from "react";
import Container from "../Container/Container";
import FAQItem from "./FAQItem/FAQItem";
import SubTitle from "../SubTitle/SubTitle";
import image1 from "../../images/jpg/accordion1.jpg";
import image2 from "../../images/jpg/accordion2.jpg";
import image3 from "../../images/jpg/accordion3.jpg";
import image4 from "../../images/jpg/accordion4.jpg";
import styles from "./FAQ.module.css";

const faqCollection = [
  {
    title: "WHAT IS AN NFT COLLECTION?",
    text: "An NFT collection is a group of unique digital assets, each represented by a non-fungible token, typically created around a specific theme or style.",
    id: "11111",
    image: image1,
  },
  {
    title: "HOW DO I PURCHASE NFTS FROM A COLLECTION?",
    text: "To purchase nfts from a collection, you typically need to use cryptocurrency on a blockchain0based marketplace.",
    id: "11112",
    image: image2,
  },
  {
    title: "CAN I SELL OR TRADE NFTS FROM A COLLECTION?",
    text: "Yes, you can sell or trade NFTs from a collection like you would other digital assets.",
    id: "11113",
    image: image3,
  },
  {
    title: "WHAT RIGHTS DO I HAVE AS AN OWNER OF AN NFT?",
    text: "As an NFT owner, you can own, transfer, potentially access exclusive content, resell, but don't automatically get copyright or intellectual property rights.",
    id: "11114",
    image: image4,
  },
];

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
