import { SideWrapper } from "./Side.styles";

interface SideProps {
  position: "left" | "right";
  children: React.ReactNode;
}

const Side: React.FC<SideProps> = ({ position, children }) => {
  return <SideWrapper position={position}>{children}</SideWrapper>;
};

export default Side;
