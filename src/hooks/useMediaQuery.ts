import { useState, useEffect } from "react";

const useMediaQuery = (width: number) => {
  const [isLessThanWidth, setIsLessThanWidth] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLessThanWidth(window.innerWidth < width);
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return isLessThanWidth;
};

export default useMediaQuery;
