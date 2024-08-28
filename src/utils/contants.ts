interface SocialMedia {
  name: string;
  url: string;
  icon: string;
}

interface NavLink {
  name: string;
  href: string;
}

// use less than math to calculate
interface Breakpoints {
  smallDevice: number;
  mobile: number;
  tablet: number;
  desktop: number;
}

interface Metadata {
  title: string;
  description: string;
}

export const breakpoints: Readonly<Breakpoints> = {
  smallDevice: 481,
  mobile: 769,
  tablet: 1025,
  desktop: 1201,
};

export const defaultMetadata: Metadata = {
  title: "David Bernadi | Software Engineer & Frontend Enthusiast",
  description:
    "Welcome to the personal site of David Bernadi, a Software Engineer with a strong focus on Frontend Development. Discover my experience, work projects, and get in touch to collaborate on modern web projects.",
};

export const email: string = "davidbernadi13@gmail.com";

export const socialAccounts: SocialMedia[] = [
  {
    name: "GitHub",
    url: "https://github.com/david1312",
    icon: "FaGithub",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/david1396/",
    icon: "FaLinkedin",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/davidb1312",
    icon: "FaInstagram",
  },
];

export const navLinks: NavLink[] = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Project",
    href: "#project",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

interface TechStack {
  title: string;
  items: string[];
}

export const techStacks: TechStack[] = [
  {
    title: "Programming Languages",
    items: ["Javascript", "Typescript", "HTML", "CSS", "Golang", "PHP"],
  },
  {
    title: "Libraries & Frameworks",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "Redux",
      "i18next",
      "RxJS",
      "Emotion",
      "styled-components",
      "Tailwind",
      "Vue",
      "Nuxt",
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      "Git",
      "Vercel",
      "Netlify",
      "Docker",
      "Webpack",
      "S3",
      "WebSocket",
      "Jira",
      "Figma",
    ],
  },
  {
    title: "Databases",
    items: ["MySQL", "PostgreSQL", "Redis", "MongoDB", "Firebase"],
  },
];
