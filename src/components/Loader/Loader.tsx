/** @jsxImportSource @emotion/react */
import { useEffect } from "react";
import { Container, ContainerContent } from "./Loader.styles";
import anime from "animejs";
import Logo from "@/components/Common/Icons/Logo";

interface LoaderProps {
  finishLoading: () => void;
}

const Loader: React.FC<LoaderProps> = ({ finishLoading }) => {
  useEffect(() => {
    const anim = anime.timeline({
      complete: () => {
        finishLoading();
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
      <ContainerContent>
        <Logo />
      </ContainerContent>
    </Container>
  );
};

export default Loader;
