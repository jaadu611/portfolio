"use client";

import useControlCenterStore from "@/store/controlCenter";
import { Bluetooth, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const BluetoothButton = () => {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHydrated(true);
  }, []);
  const changeControlCenterMode = useControlCenterStore(
    (state) => state.changeControlCenterMode
  );

  if (!hydrated) return null;
  return (
    <button
      onClick={() => changeControlCenterMode("bluetooth")}
      className="group px-3 py-3 flex-1 cursor-pointer hover:bg-white/30 flex items-center justify-between transition-all duration-200"
    >
      <div className="flex items-center gap-3 cursor-pointer">
        <Bluetooth className="bg-blue-600 p-1.5 size-8 rounded-full" />
        <div className="flex flex-col items-start leading-tight">
          <span className="font-medium text-black text-sm">Bluetooth</span>
          <span className="font-normal text-gray-800 text-[10px]">On</span>
        </div>
      </div>
      <ChevronRight
        size={16}
        className="text-black/50 opacity-0 -translate-x-1 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-x-0"
      />
    </button>
  );
};

export default BluetoothButton;
