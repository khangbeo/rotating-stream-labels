import { useState, useEffect } from "react";

const useCarousel = (
  users: Array<object>,
  intervalTime: number = 4000
): number => {
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
