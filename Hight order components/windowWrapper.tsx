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
    const [lastState, setLastState] = useState<{
      top: number;
      left: number;
      width: number;
      height: number;
    } | null>(null);

    const [wasMaximized, setWasMaximized] = useState(false);

    // Make the window appear at the center
    useEffect(() => {
      if (typeof window === "undefined") return;
      if (lastState) return;

      const width = 720;
      const height = 420;

      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLastState({
        top: window.innerHeight / 2 - height / 2,
        left: window.innerWidth / 2 - width / 2,
        width,
        height,
      });
    }, [lastState]);

    // Open and close function
    useGSAP(() => {
      const el = windowRef.current;
      if (!el) return;

      if (isOpen && lastState) {
        el.style.display = "block";

        // Restore previous state
        if (wasMaximized) {
          gsap.set(el, {
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            position: "fixed",
            borderRadius: 0,
          });
        } else {
          gsap.set(el, {
            top: lastState.top,
            left: lastState.left,
            width: lastState.width,
            height: lastState.height,
            position: "absolute",
            borderRadius: 10,
          });
        }

        gsap.fromTo(
          el,
          { scale: 0.8, opacity: 0, y: 40 },
          { scale: 1, opacity: 1, y: 0, duration: 0.25, ease: "power1.out" }
        );
      } else if (el.style.display !== "none") {
        gsap.to(el, {
          scale: 0.8,
          opacity: 0,
          y: 40,
          duration: 0.25,
          ease: "power1.in",
          onComplete: () => {
            el.style.display = "none";
            if (kill) {
              gsap.set(el, { clearProps: "all" });
              setLastState(null);
              setWasMaximized(false);
            }
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
          type: "left,top",
          trigger: handle,
          onPress: () => focusWindow(windowKey),
          onDragEnd: () => {
            const rect = el.getBoundingClientRect();
            setLastState({
              top: rect.top,
              left: rect.left,
              width: rect.width,
              height: rect.height,
            });
          },
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

      if (isMaximized) {
        draggableRef.current?.kill();
        draggableRef.current = null;

        // Save current position and size
        const rect = el.getBoundingClientRect();
        setLastState({
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
        });
        setWasMaximized(true);

        gsap.set(el, { clearProps: "transform" });
        gsap.to(el, {
          duration: 0.25,
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          borderRadius: 0,
          position: "fixed",
          ease: "power2.inOut",
        });
      } else if (lastState) {
        // Restore previous position
        gsap.set(el, { clearProps: "transform" });
        setWasMaximized(false);

        gsap.to(el, {
          duration: 0.25,
          top: lastState.top,
          left: lastState.left,
          width: lastState.width,
          height: lastState.height,
          borderRadius: 10,
          position: "absolute",
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
        className="absolute shadow-lg flex flex-col rounded-lg"
      >
        {/* Header with window controls */}
        <div
          ref={headerRef}
          className="flex h-10 items-center justify-center px-4 rounded-t-lg bg-[#f5f5f7] dark:bg-gray-800 border-b border-[#d1d1d1] dark:border-gray-700 select-none text-sm text-[#1f1f1f] dark:text-gray-200"
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
