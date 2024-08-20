/** @jsxImportSource @emotion/react */
import { useEffect } from "react";
import { Container, svgStyles, textStyles } from "./Loader.styles";
import anime from "animejs";

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
      <svg
        id="logo"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        css={svgStyles}
      >
        <g>
          <g id="D" transform="translate(36, 33)" css={textStyles}>
            <text>
              <tspan x="-1" y="34">
                D
              </tspan>
            </text>
          </g>
          <path
            stroke="#64FFDA"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M 50, 5
               L 11, 27
               L 11, 72
               L 50, 95
               L 89, 73
               L 89, 28 z"
          />
        </g>
      </svg>
    </Container>
  );
};

export default Loader;
