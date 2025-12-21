// External imports
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

// Internal imports
import {
  INITIAL_Z_INDEX,
  WINDOW_CONFIG as RAW_WINDOW_CONFIG,
} from "@/constants/Store.constants";

// Window item interface
interface WindowItem {
  isOpen: boolean;
  zIndex: number;
  data: string | null;
  kill?: boolean;
  isMaximized?: boolean;
}

// type of window keys
type WindowKey = keyof typeof RAW_WINDOW_CONFIG;

// types of states for windows
interface WindowState {
  windows: Record<WindowKey, WindowItem>;
  nextZIndex: number;
  toggleWindow: (key: WindowKey, data?: string | null) => void;
  focusWindow: (key: WindowKey, data?: string | null) => void;
  killWindowState: (key: WindowKey) => void;
  isMaximized: (key: WindowKey) => void;
}

// Extract correct data type from the config
const WINDOW_CONFIG: Record<WindowKey, WindowItem> = Object.fromEntries(
  Object.entries(RAW_WINDOW_CONFIG).map(([key, win]) => [
    key,
    { ...win, data: null as string | null },
  ])
) as Record<WindowKey, WindowItem>;

// Main store function
const useWindowStore = create<WindowState>()(
  immer((set) => ({
    // Get all the windows
    windows: WINDOW_CONFIG,
    // Z-index updater
    nextZIndex: INITIAL_Z_INDEX + 1,

    // Toggle window
    toggleWindow: (key, data = null) =>
      set((state) => {
        const win = state.windows[key];
        if (!win) return;

        // Close if opened
        if (win.isOpen) {
          win.isOpen = false;
          win.zIndex = INITIAL_Z_INDEX;
          win.data = null;
          return;
        }

        // Open if closed
        win.isOpen = true;
        win.zIndex = state.nextZIndex++;
        win.data = data;

        // Reset killed state when reopening
        win.kill = false;
      }),

    // Focus the selected window
    focusWindow: (key) =>
      set((state) => {
        const win = state.windows[key];
        if (!win || !win.isOpen) return;

        win.zIndex = state.nextZIndex++;
      }),

    // Set killed state for a window
    killWindowState: (key) =>
      set((state) => {
        const win = state.windows[key];
        if (!win) return;
        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX;
        win.data = null;
        win.kill = true;
        return;
      }),

    // Set maximized state for a window
    isMaximized: (key) =>
      set((state) => {
        const win = state.windows[key];
        if (!win) return;

        win.isMaximized = !win.isMaximized;
      }),
  }))
);

export default useWindowStore;
