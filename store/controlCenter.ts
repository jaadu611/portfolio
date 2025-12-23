import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface ControlCenterState {
  isControlCenterOpen: boolean;
  mode: "main" | "bluetooth";

  toggleControlCenter: () => void;
  changeControlCenterMode: (mode: ControlCenterState["mode"]) => void;
}

const useControlCenterStore = create<ControlCenterState>()(
  immer((set) => ({
    isControlCenterOpen: false,
    mode: "main",

    // Toggle open/close
    toggleControlCenter: () =>
      set((state) => {
        state.isControlCenterOpen = !state.isControlCenterOpen;

        if (state.isControlCenterOpen) {
          state.mode = "main";
        }
      }),

    // Change active view
    changeControlCenterMode: (mode) =>
      set((state) => {
        state.mode = mode;
      }),
  }))
);

export default useControlCenterStore;
