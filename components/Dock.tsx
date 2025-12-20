"use client";

// External imports
import Image from "next/image";
import { useRef } from "react";
import { Tooltip } from "react-tooltip";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// Internal imports
import { dockApps } from "@/constants/Dock.constants";

// Main Dock component
const Dock = () => {
  // Dock reference
  const dockRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const dock = dockRef.current;
    if (!dock) return;

    // Get all the dock icons
    const icons = dock.querySelectorAll<HTMLElement>(".dock-icon");

    // Animate the icons
    const animateIcons = (mouseX: number) => {
      const { left } = dock.getBoundingClientRect();

      icons.forEach((icon) => {
        const { left: iconLeft, width } = icon.getBoundingClientRect();

        const center = iconLeft - left + width / 2;
        const distance = Math.abs(mouseX - center);
        const intensity = Math.exp(-(distance ** 2.5) / 2000);

        gsap.to(icon, {
          scale: 1 + 0.25 * intensity,
          y: -15 * intensity,
          duration: 0.2,
          ease: "power1.out",
        });
      });
    };

    // When mouse move on the icon
    const handleMouseMove = (e: MouseEvent) => {
      const { left } = dock.getBoundingClientRect();
      animateIcons(e.clientX - left);
    };

    // When the mouse leaves the icon
    const resetIcons = () => {
      icons.forEach((icon) =>
        gsap.to(icon, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power1.out",
        })
      );
    };

    // Add listeners
    dock.addEventListener("mousemove", handleMouseMove);
    dock.addEventListener("mouseleave", resetIcons);

    // Clean up
    return () => {
      dock.removeEventListener("mousemove", handleMouseMove);
      dock.removeEventListener("mouseleave", resetIcons);
    };
  }, []);

  // Open the app window
  const toggleApp = (app: { id: string; canOpen: boolean }) => {
    // TODO implement open window logic
  };

  return (
    <section
      id="dock"
      className="absolute h-fit -bottom-5 left-1/2 -translate-1/2 z-50 select-none"
    >
      {/* Dock */}
      <div
        ref={dockRef}
        className="bg-white/20 backdrop-blur-md justify-between rounded-2xl p-1.5 flex items-end gap-1.5"
      >
        {/* All the icons */}
        {dockApps.map(({ id, icon, name, canOpen }) => (
          <div key={id} className="dock-icon relative flex justify-center">
            <button
              type="button"
              aria-label={name}
              data-tooltip-id="dock-tooltip"
              data-tooltip-content={name}
              data-tooltip-delay-show={300}
              disabled={!canOpen}
              onClick={() => toggleApp({ id, canOpen })}
            >
              <Image
                src={`/images/${icon}`}
                alt={name}
                loading="lazy"
                className={canOpen ? "" : "opacity-60"}
                height={70}
                width={70}
              />
            </button>
          </div>
        ))}

        {/* Tool tip for the icons */}
        <Tooltip
          id="dock-tooltip"
          place="top"
          className="py-1! px-3! w-fit! text-center! text-xs! rounded-md! bg-blue-200! text-blue-900! shadow-2xl!"
        />
      </div>
    </section>
  );
};

export default Dock;
