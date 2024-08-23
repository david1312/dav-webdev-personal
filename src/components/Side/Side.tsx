import React from "react";
import { SideWrapper } from "./Side.styles";
import { useIsMobileContext } from "@/context/IsMobileContext";

interface SideProps {
  position: "left" | "right";
  children: React.ReactNode;
}

const Side: React.FC<SideProps> = ({ position, children }) => {
  const { isMobile } = useIsMobileContext();
  return (
    <SideWrapper position={position} isMobile={isMobile}>
      {children}
    </SideWrapper>
  );
};

export default Side;
