/** @jsxImportSource @emotion/react */
import { useEffect } from "react";
import { Container } from "./Loader.styles";
import anime from "animejs";
import Logo from "@/components/common/Icons/Logo";

interface LoaderProps {
  finishLoading: () => void;
}

const Loader: React.FC<LoaderProps> = ({ finishLoading }) => {
  useEffect(() => {
    const anim = anime.timeline({
      complete: () => {
        finishLoading();
        console.log("finish");
      },
    });

    anim
      .add({
        targets: "#logo path",
        delay: 300,
        duration: 1500,
        easing: "easeInOutQuart",
        strokeDashoffset: [anime.setDashoffset, 0],
      })
      .add({
        targets: "#logo #D",
        duration: 700,
        easing: "easeInOutQuart",
        opacity: 1,
      })
      .add({
        targets: "#logo",
        delay: 500,
        duration: 300,
        easing: "easeInOutQuart",
        opacity: 0,
        scale: 0.1,
      });
  }, [finishLoading]);

  return (
    <Container>
      <Logo />
    </Container>
  );
};

export default Loader;
