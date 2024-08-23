import React from "react";
import { SideWrapper } from "./Side.styles";

interface SideProps {
  position: "left" | "right";
  isMobile: boolean;
  children: React.ReactNode;
}

const Side: React.FC<SideProps> = ({ position, isMobile, children }) => {
  return (
    <SideWrapper position={position} isMobile={isMobile}>
      {" "}
      {children}
    </SideWrapper>
  );
};

export default Side;
