import Image from "next/image";
import { Inter } from "next/font/google";
import Intro from "@/components/Intro/Intro";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex ${inter.className}`}>
      <Intro />
      <Intro />
    </main>
  );
}
