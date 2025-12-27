// External imports
import { Inter } from "next/font/google";

// Internal imports
import WelcomeClient from "./Welcome.client";
import FullscreentToggle from "../FullscreentToggle";
import NavbarOptions from "../../Hight order components/NavbarControlCenterWrapper";

// Font used in GSAP
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Render text as individual letters
const renderText = (text: string, className: string, baseWeight: number) =>
  [...text].map((char, idx) => (
    <span
      key={idx}
      className={`${className} inline-block`}
      style={
        {
          "--wght": baseWeight,
          fontVariationSettings: `"wght" var(--wght)`,
        } as React.CSSProperties
      }
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));

// Main Welcome
const Welcome = () => {
  return (
    <section
      id="welcome"
      className={`${inter.className} relative flex h-dvh flex-col items-center justify-center`}
    >
      <p
        data-subtitle
        className="text-center leading-none tracking-tight text-7xl md:text-8xl font-normal text-white dark:text-gray-300 dark:drop-shadow-[0_0_40px_rgba(255,255,255,0.15)]"
      >
        {renderText("Portfolio OS", "", 200)}
      </p>

      <h1
        data-title
        className="mt-6 text-center text-xl md:text-3xl italic font-light text-white dark:text-gray-300 dark:drop-shadow-[0_0_20px_rgba(255,255,255,0.08)]"
      >
        {renderText("Held together with prayers and hopes", "", 400)}
      </h1>

      <div className="mt-12 flex items-center gap-4">
        <FullscreentToggle />
        <NavbarOptions />
      </div>

      <WelcomeClient />
    </section>
  );
};

export default Welcome;
