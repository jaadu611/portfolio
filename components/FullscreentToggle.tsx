"use client";

// External imports
import { Square } from "lucide-react";
import { useEffect, useState } from "react";

// Main fullscreen toggle component
const FullscreenToggle = () => {
  // Check if fullscreen or not
  const [isFullscreen, setFullscreen] = useState(false);

  useEffect(() => {
    const handleChange = () => {
      setFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleChange);
    return () => document.removeEventListener("fullscreenchange", handleChange);
  }, []);

  // Toggle the function
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(console.error);
    } else {
      document.exitFullscreen().catch(console.error);
    }
  };

  return (
    <button
      onClick={toggleFullscreen}
      name="Toggle Fullscreen"
      type="button"
      aria-label="Toggle Fullscreen"
      title="Toggle Fullscreen"
      className="fixed bottom-5 right-5 z-9999 flex items-center gap-2 rounded-lg bg-black/70 px-4 py-2 text-sm text-white backdrop-blur hover:bg-black"
    >
      {isFullscreen ? (
        <>
          <Square size={16} />
          Exit
        </>
      ) : (
        <>
          <Square size={16} />
          Fullscreen
        </>
      )}
    </button>
  );
};

export default FullscreenToggle;
