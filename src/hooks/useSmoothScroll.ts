import { useCallback } from "react";

const useSmoothScroll = () => {
  const handleSmoothScroll = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href")!.slice(2);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
      history.pushState(null, "", `#${targetId}`);
    },
    []
  );

  return handleSmoothScroll;
};

export default useSmoothScroll;
