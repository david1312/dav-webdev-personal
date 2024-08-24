import Link from "next/link";
import Side from "./Side";
import { email } from "@/utils/contants";

const SideRight: React.FC = () => {
  return (
    <Side position="right">
      <Link href={`mailto:${email}`} target="_blank">
        {email}
      </Link>
    </Side>
  );
};

export default SideRight;
