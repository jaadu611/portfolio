"use client";

// External imports
import { Square } from "lucide-react";
import { useState } from "react";

// Main fullscreen toggle component
const FullscreenToggle = () => {
  // Check if fullscreen or not
  const [isFullscreen, setFullscreen] = useState(false);

  // Toggle the function
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setFullscreen(true);
    } else {
      document.exitFullscreen();
      setFullscreen(false);
    }
  };

  return (
    <button
      onClick={toggleFullscreen}
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
