interface SocialMedia {
  name: string;
  url: string;
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
    "Welcome to the personal site of David Bernadi, a Software Engineer with a strong focus on Frontend Development. Discover my experience, view work samples, and get in touch to collaborate on modern web projects.",
};

export const email: string = "davidbernadi13@gmail.com";

export const socialMedia: SocialMedia[] = [
  {
    name: "GitHub",
    url: "https://github.com/bchiang7",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/bchiang7",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/bchiang7",
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/bchiang7",
  },
  {
    name: "Codepen",
    url: "https://codepen.io/bchiang7",
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
