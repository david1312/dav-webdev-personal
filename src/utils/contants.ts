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
export const breakpoints: { mobile: number; tablet: number; desktop: number } =
  {
    mobile: 769,
    tablet: 1025,
    desktop: 1201,
  };

export const defaultMetadata: { title: string; description: string } = {
  title: "David Bernadi | Software Engineer & Frontend Enthusiast",
  description:
    "Welcome to the personal site of David Bernadi, a Software Engineer with a strong focus on Frontend Development. Discover my experience, work projects, and get in touch to collaborate on modern web projects.",
};

export const email: string = "davidbernadi13@gmail.com";

export const socialMedia: SocialMedia[] = [
  {
    name: "GitHub",
    url: "https://github.com/david1312",
    icon: "FaGithub",
  },
  {
    name: "Linkedin",
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
    name: "Work",
    href: "#work",
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
      "styled-component",
      "Tailwind",
      "Vue",
      "Nuxt",
    ],
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "Vercel", "Docker", "Webpack", "S3", "Jira", "Figma"],
  },
  {
    title: "Database",
    items: ["MySql", "Postgre", "Redis", "MongoDB", "Firebase"],
  },
];
