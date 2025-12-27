import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface ControlCenterState {
  isControlCenterOpen: boolean;

  toggleControlCenter: () => void;
}

const useControlCenterStore = create<ControlCenterState>()(
  immer((set) => ({
    isControlCenterOpen: false,
    mode: "main",

    // Toggle open/close
    toggleControlCenter: () =>
      set((state) => {
        state.isControlCenterOpen = !state.isControlCenterOpen;
      }),
  }))
);

export default useControlCenterStore;
