import React from "react";
import styled from "@emotion/styled";
import { smallButton, bigButton } from "./Button.styles";

interface ButtonProps {
  variant: "small" | "big";
  label: string;
}

const StyledButton = styled.button<{ variant: "small" | "big" }>`
  ${({ variant }) => (variant === "small" ? smallButton : bigButton)}
`;

const Button: React.FC<ButtonProps> = ({ variant, label }) => {
  return <StyledButton variant={variant}>{label}</StyledButton>;
};

export default Button;
