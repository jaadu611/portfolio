"use client";

import useControlCenterStore from "@/store/controlCenter";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import MainControlCenter from "./views/MainControlCenter";

const NavbarControlCenter = () => {
  const isOpen = useControlCenterStore((state) => state.isControlCenterOpen);
  const mode = useControlCenterStore((state) => state.mode);

  const controlRef = useRef<HTMLDivElement>(null);

  const prevSize = useRef({ width: 0, height: 0 });

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHydrated(true);
  }, []);
  useLayoutEffect(() => {
    const element = controlRef.current;
    if (!element) return;
    const newWidth = element.offsetWidth;
    const newHeight = element.offsetHeight;

    if (
      prevSize.current.width !== 0 &&
      (prevSize.current.width !== newWidth ||
        prevSize.current.height !== newHeight)
    ) {
      gsap.killTweensOf(element);

      gsap.set(element, {
        width: prevSize.current.width,
        height: prevSize.current.height,
        overflow: "hidden",
      });

      gsap.to(element, {
        width: newWidth,
        height: newHeight,
        duration: mode !== "main" ? 0.4 : 0,
        ease: "power3",
        clearProps: "width,height,overflow",
      });
    }

    prevSize.current = { width: newWidth, height: newHeight };
  }, [mode]);

  useEffect(() => {
    if (!controlRef.current) return;

    gsap.to(controlRef.current, {
      y: isOpen ? 0 : -20,
      opacity: isOpen ? 1 : 0,
      pointerEvents: isOpen ? "auto" : "none",
      duration: 0.25,
      ease: "power3",
    });
  }, [isOpen]);

  if (!hydrated) return null;

  return (
    <section
      ref={controlRef}
      className="absolute top-5 right-5 p-3 bg-white/30 backdrop-blur-xl rounded-2xl shadow-[2px_2px_8px_rgba(0,0,0,0.2)] overflow-hidden"
      style={{
        opacity: 0,
        transform: "translateY(-20px)",
        pointerEvents: "none",
      }}
    >
      {mode === "main" && <MainControlCenter />}

      {mode === "bluetooth" && (
        <div className="text-center text-gray-600 w-64 h-32 flex items-center justify-center">
          Bluetooth Settings
        </div>
      )}
    </section>
  );
};

export default NavbarControlCenter;
