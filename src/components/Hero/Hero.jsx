import HeroContainer from "./HeroContainer/HeroContainer";
import HeroTitle from "./HeroTitle/HeroTitle";
import HeroAnchor from "./HeroAnchor/HeroAnchor";
import HeroPicture from "./HeroPicture/HeroPicture";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroTitle />
      <HeroPicture />
      <HeroAnchor />
    </HeroContainer>
  );
};

export default Hero;
