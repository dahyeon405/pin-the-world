import { useEffect, useState } from "react";
import { useThrottle } from "./useThrottle";

export const useScroll = (throttleInterval = 0) => {
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);

  const onScroll = useThrottle(() => {
    setScrollPosition({
      x: window.scrollX,
      y: window.scrollY,
    });
  }, throttleInterval);

  return scrollPosition;
};
