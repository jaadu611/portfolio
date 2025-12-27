"use client";

// External imports
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

// Internal imports
import { useHydrated } from "@/hooks/useHydrated";
import NavbarControlCenterBody from "../components/Navbar/NavbarControlCenterBody";
import useControlCenterStore from "@/store/controlCenter";

const NavbarControlCenter = () => {
  const isOpen = useControlCenterStore((state) => state.isControlCenterOpen);

  const controlRef = useRef<HTMLDivElement>(null);

  const hydrated = useHydrated();

  useEffect(() => {
    if (!controlRef.current) return;

    gsap.to(controlRef.current, {
      y: isOpen ? 0 : -20,
      opacity: isOpen ? 1 : 0,
      pointerEvents: isOpen ? "auto" : "none",
      duration: 0.25,
      ease: "power3.out",
    });
  }, [isOpen]);

  if (!hydrated) return null;

  return (
    <section
      ref={controlRef}
      className={`absolute top-5 right-5 bg-white/30 dark:bg-black/40 backdrop-blur-xl rounded-2xl shadow-[2px_2px_8px_rgba(0,0,0,0.2)]`}
      style={{
        opacity: 0,
        transform: "translateY(-20px)",
        pointerEvents: "none",
      }}
    >
      <NavbarControlCenterBody />
    </section>
  );
};

export default NavbarControlCenter;
