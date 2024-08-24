import About from "@/components/About/About";
import Intro from "@/components/Intro/Intro";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      const element = document.getElementById(hash.slice(1)); // Remove the '#' and find the element
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
  return (
    <main>
      <Intro />
      <About />
    </main>
  );
}
