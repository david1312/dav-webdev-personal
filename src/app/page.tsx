"use client";
import About from "@/components/Section/About/About";
import Contact from "@/components/Section/Contact/Contact";
import Experience from "@/components/Section/Experience/Experience";
import Intro from "@/components/Section/Intro/Intro";
import Project from "@/components/Section/Project/Project";
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
      <Experience />
      <Project />
      <Contact />
    </main>
  );
}
