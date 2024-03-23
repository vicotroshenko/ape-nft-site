import throttle from "lodash.throttle";
import { useEffect, useRef, useState } from "react";

export const useElementOnScreen = ({ marginTop = 0 }) => {
  const [visible, setVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const aboutEl = document.querySelector("#about").offsetTop;

    const handleScroll = () => {
      if (containerRef.current && aboutEl) {
        const heightEl = containerRef.current.getBoundingClientRect().bottom;
        setVisible(aboutEl - heightEl + marginTop < window.scrollY);
      }
    };

    window.addEventListener("scroll", throttle(handleScroll, 300));

    return () => window.removeEventListener("scroll", handleScroll);
  }, [marginTop]);

  return [containerRef, visible];
};
