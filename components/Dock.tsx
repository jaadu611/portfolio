"use client";

// External imports
import Image from "next/image";
import { useRef } from "react";
import { Tooltip } from "react-tooltip";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// Internal imports
import { dockApps } from "@/constants/Dock.constants";
import useWindowStore from "@/store/window";
import { WINDOW_CONFIG } from "@/constants/Store.constants";

// Main Dock component
const Dock = () => {
  // Dock reference
  const dockRef = useRef<HTMLDivElement | null>(null);

  // Import function from store
  const { toggleWindow } = useWindowStore();

  // Apply animation
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
  const toggleApp = (app: { id: keyof typeof WINDOW_CONFIG }) => {
    toggleWindow(app.id);
  };

  return (
    <section
      id="dock"
      className="absolute z-9999 h-fit bottom-5 left-1/2 -translate-x-1/2 select-none"
    >
      {/* Dock */}
      <div
        ref={dockRef}
        className="bg-white/20 dark:bg-gray-400/30 backdrop-blur-md justify-between rounded-2xl p-1.5 flex items-end gap-1.5"
      >
        {/* All the icons */}
        {dockApps.map(({ id, icon, name }) => (
          <div key={id} className="dock-icon relative flex justify-center">
            <button
              name={`${name}-icon`}
              type="button"
              aria-label={name}
              title={name}
              data-tooltip-id="dock-tooltip"
              data-tooltip-content={name}
              data-tooltip-delay-show={300}
              onClick={() => toggleApp({ id })}
              className="cursor-pointer"
            >
              <Image
                src={`/images/${icon}`}
                alt={name}
                loading="lazy"
                height={60}
                width={60}
                style={{ width: "auto", height: "auto" }}
              />
            </button>
          </div>
        ))}

        {/* Tool tip */}
        <Tooltip
          id="dock-tooltip"
          place="top"
          delayHide={100}
          className="py-1! px-3! w-fit! text-center! text-xs! rounded-md! bg-blue-200! text-blue-900! shadow-2xl!"
        />
      </div>
    </section>
  );
};

export default Dock;
