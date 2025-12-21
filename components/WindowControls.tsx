// External imports
import { Minus, X, Maximize, Square } from "lucide-react";

// Internal imports
import { WINDOW_CONFIG } from "@/constants/Store.constants";
import useWindowStore from "@/store/window";

// Main windows control
const WindowControls = ({ target }: { target: keyof typeof WINDOW_CONFIG }) => {
  // Import states
  const { toggleWindow, killWindowState, isMaximized, windows } =
    useWindowStore();

  // Condition if maximized
  const Maximized = windows[target].isMaximized;

  return (
    <div className="flex absolute left-3 top-3 gap-2">
      <div
        className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] hover:bg-[#ff2d1f] cursor-pointer flex items-center justify-center transition-all duration-150"
        onClick={() => (toggleWindow(target), killWindowState(target, true))}
      >
        <X size={10} className="text-white" />
      </div>

      <div
        className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] hover:bg-[#ffda6e] cursor-pointer flex items-center justify-center transition-all duration-150"
        onClick={() => toggleWindow(target)}
      >
        <Minus size={10} className="text-white" />
      </div>

      <div
        className="w-3.5 h-3.5 rounded-full bg-[#27c93f] hover:bg-[#4cd964] cursor-pointer flex items-center justify-center transition-all duration-150"
        onClick={() => isMaximized(target)}
      >
        {Maximized ? (
          <Square size={10} className="text-white" />
        ) : (
          <Maximize size={10} className="text-white" />
        )}
      </div>
    </div>
  );
};

export default WindowControls;
