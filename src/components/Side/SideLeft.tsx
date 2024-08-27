import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Side from "./Side";
import Link from "next/link";
import { socialAccounts } from "@/utils/contants";
import iconMap from "@/utils/iconMap";

const SideLeft: React.FC = () => {
  return (
    <Side position="left">
      <ul>
        {socialAccounts.map((val, index) => {
          const IconComponent = iconMap[val.icon];
          return (
            <li key={index}>
              <Link
                href={val.url}
                aria-label={val.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconComponent size={24} />
              </Link>
            </li>
          );
        })}
      </ul>
    </Side>
  );
};

export default SideLeft;
