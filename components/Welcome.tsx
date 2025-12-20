// app/components/Welcome.tsx (Server Component)

import { Inter } from "next/font/google";
import WelcomeClient from "./Welcome.client";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Render text as individual letters (safe for SSR)
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

const Welcome = () => {
  return (
    <section
      id="welcome"
      className={`${inter.className} flex flex-col items-center justify-center text-white h-dvh`}
    >
      <p data-subtitle>
        {renderText("System online.", "text-7xl font-normal", 200)}
      </p>

      <h1 data-title className="mt-7">
        {renderText(
          "Running purely on prayers and hopes",
          "text-3xl italic",
          400
        )}
      </h1>

      {/* Client-only logic */}
      <WelcomeClient />
    </section>
  );
};

export default Welcome;
