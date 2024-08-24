/** @jsxImportSource @emotion/react */
import { svgStyles, textStyles } from "./Logo.styles"; // Adjust the import path as necessary

const Logo: React.FC = () => {
  return (
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
  );
};

export default Logo;
