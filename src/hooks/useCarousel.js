import { useState, useEffect } from "react";

const useCarousel = (users, intervalTime = 4000) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % users.length);
    }, intervalTime);
    return () => clearInterval(interval);
  }, [users.length, intervalTime]);

  return index;
};

export default useCarousel;
