import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Side from "./Side";
import Link from "next/link";
import { IconType } from "react-icons";
import { socialMedia } from "@/utils/contants";

const iconMap: Record<string, IconType> = {
  FaGithub: FaGithub,
  FaLinkedin: FaLinkedin,
  FaInstagram: FaInstagram,
};

const SideLeft: React.FC = () => {
  return (
    <Side position="left">
      <ul>
        {socialMedia.map((val, index) => {
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
