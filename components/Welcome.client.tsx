"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const FONT_WEIGHT = {
  subtitle: { min: 200, max: 700, default: 200 },
  title: { min: 400, max: 900, default: 400 },
};

type FontWeightType = keyof typeof FONT_WEIGHT;

// Animate a single letter
const animateLetter = (
  letter: HTMLSpanElement,
  weight: number,
  duration = 0.35
) => {
  gsap.to(letter, {
    "--wght": weight,
    duration,
    ease: "power3.out",
  });
};

// Hover logic
const setupTextHover = (container: HTMLElement, type: FontWeightType) => {
  const letters = Array.from(
    container.querySelectorAll<HTMLSpanElement>("span")
  );

  const { min, max, default: base } = FONT_WEIGHT[type];

  const handleMouseMove = (e: MouseEvent) => {
    const { left } = container.getBoundingClientRect();
    const mouseX = e.clientX - left;

    letters.forEach((letter) => {
      const { left: l, width: w } = letter.getBoundingClientRect();
      const distance = Math.abs(mouseX - (l - left + w / 2));
      const intensity = Math.exp(-(distance ** 2) / 2000);
      const weight = min + (max - min) * intensity;

      animateLetter(letter, weight, 0.25);
    });
  };

  const handleMouseLeave = () => {
    letters.forEach((letter) => animateLetter(letter, base, 0.45));
  };

  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseleave", handleMouseLeave);
  };
};

const WelcomeClient = () => {
  useGSAP(() => {
    const title = document.querySelector<HTMLElement>("[data-title]");
    const subtitle = document.querySelector<HTMLElement>("[data-subtitle]");

    if (!title || !subtitle) return;

    const cleanTitle = setupTextHover(title, "title");
    const cleanSubtitle = setupTextHover(subtitle, "subtitle");

    return () => {
      cleanTitle?.();
      cleanSubtitle?.();
    };
  }, []);

  return null;
};

export default WelcomeClient;
