"use client";

// External imports
import { useGSAP } from "@gsap/react";
import { useRef, useEffect, useState } from "react";
import type { ComponentType } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

// Internal Imports
import WindowControls from "@/components/WindowControls";
import { WINDOW_CONFIG } from "@/constants/Store.constants";
import useWindowStore from "@/store/window";

// Regester draggable plugin
gsap.registerPlugin(Draggable);

// Main window wrapper
const windowWrapper = <P extends object>(
  Component: ComponentType<P>,
  windowKey: keyof typeof WINDOW_CONFIG,
  title: string
) => {
  const Wrapped = (props: P) => {
    // Fetch state
    const { focusWindow, windows } = useWindowStore();

    // Fetch conditions for the windows
    const { isOpen, zIndex, kill, isMaximized } = windows[windowKey];

    // Window references
    const windowRef = useRef<HTMLDivElement | null>(null);
    const headerRef = useRef<HTMLDivElement | null>(null);
    const draggableRef = useRef<Draggable | null>(null);

    // Save last position
    const [lastState, setLastState] = useState({
      top: 0,
      left: 0,
      width: 720,
      height: 420,
    });

    // Make the window appear at the center
    useEffect(() => {
      if (typeof window === "undefined") return;

      const width = 720;
      const height = 420;
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLastState({
        top: window.innerHeight / 2 - height / 2,
        left: window.innerWidth / 2 - width / 2,
        width,
        height,
      });
    }, []);

    // Open and close function
    useGSAP(() => {
      const el = windowRef.current;
      if (!el) return;

      if (isOpen) {
        el.style.display = "block";

        gsap.set(el, {
          top: lastState.top,
          left: lastState.left,
          position: "absolute",
        });

        gsap.fromTo(
          el,
          { scale: 0.8, opacity: 0, y: 40 },
          { scale: 1, opacity: 1, y: 0, duration: 0.2, ease: "power1" }
        );
      } else {
        gsap.to(el, {
          scale: 0.8,
          opacity: 0,
          y: 40,
          duration: 0.2,
          ease: "power1",
          onComplete: () => {
            if (kill) gsap.set(el, { x: 0, y: 0, clearProps: "transform" });
            el.style.display = "none";
          },
        });
      }
    }, [isOpen, kill]);

    // Draggable function
    useGSAP(() => {
      const el = windowRef.current;
      const handle = headerRef.current;
      if (!el || !handle) return;

      if (draggableRef.current) draggableRef.current.kill();

      if (!isMaximized) {
        const [instance] = Draggable.create(el, {
          type: "x,y",
          trigger: handle,
          onPress: () => focusWindow(windowKey),
          edgeResistance: 0.65,
          bounds: document.body,
        });
        draggableRef.current = instance;
        return () => instance.kill();
      }
    }, [focusWindow, isMaximized]);

    // Maximize and restore function
    useGSAP(() => {
      const el = windowRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();

      if (!isMaximized) {
        gsap.to(el, {
          duration: 0.3,
          top: lastState.top,
          left: lastState.left,
          width: lastState.width,
          height: lastState.height,
          borderRadius: 10,
          position: "absolute",
          ease: "power2.inOut",
        });
      } else {
        setLastState({
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
        });

        gsap.to(el, {
          duration: 0.3,
          x: 0,
          y: 0,
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          borderRadius: 0,
          position: "fixed",
          ease: "power2.inOut",
        });
      }
    }, [isMaximized]);

    return (
      // Main Wrapper
      <section
        id={windowKey}
        ref={windowRef}
        style={{ zIndex, display: "none" }}
        className="absolute bg-white shadow-lg flex flex-col"
      >
        {/* Header with window controls */}
        <div
          ref={headerRef}
          className="flex h-10 items-center justify-center px-4 rounded-t-lg bg-[#f5f5f7] border-b border-[#d1d1d1] select-none text-sm text-[#1f1f1f]"
        >
          <WindowControls target={windowKey} />
          <h2>{title}</h2>
        </div>

        {/* Main body with decreased height */}
        <div className="h-[calc(100%-40px)]">
          <Component {...props} />
        </div>
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${
    Component.displayName || Component.name || "Component"
  })`;

  return Wrapped;
};

export default windowWrapper;
