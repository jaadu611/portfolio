// External imports
import {
  Bluetooth,
  ChevronRight,
  LucideVolume2,
  Play,
  ScreenShareIcon,
  SkipBack,
  SkipForward,
  Sun,
} from "lucide-react";
import Image from "next/image";

const value = 60; // Example volume value

// Main Navbar Control Center component
const NavbarControlCenter = () => {
  return (
    // Control Center Section
    <section className="absolute top-5 right-5 p-3 w-105 bg-white/30 backdrop-blur-xl rounded-2xl flex flex-col gap-4 duration-200 transition-all shadow-[2px_2px_8px_rgba(0,0,0,0.2)]">
      {/* Top half */}
      <div className="flex flex-1 rounded-lg gap-2">
        {/* Left half */}
        <div className="flex flex-col flex-1 bg-white/40 rounded-2xl shadow-[2px_2px_8px_rgba(0,0,0,0.2)]">
          {/* Wi-Fi */}
          <span className="group flex gap-3 px-3 py-3 rounded-t-xl flex-1 hover:bg-white/30 cursor-pointer items-center justify-between transition-all duration-200">
            <div className="flex items-center gap-3">
              <Image
                src="/icons/Wifi-white.svg"
                alt="Wi-Fi"
                height={32}
                width={32}
                className="p-1.5 bg-blue-600 rounded-full"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-medium text-black text-sm">Wi-Fi</span>
                <span className="font-normal text-gray-800 text-[10px]">
                  Socially offline.
                </span>
              </div>
            </div>
            <ChevronRight
              size={16}
              className="text-black/50 opacity-0 -translate-x-1 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-x-0"
            />
          </span>

          {/* Bluetooth */}
          <span className="group px-3 py-3 flex-1 cursor-pointer hover:bg-white/30 flex items-center justify-between transition-all duration-200">
            <div className="flex items-center gap-3">
              <Bluetooth className="bg-blue-600 p-1.5 size-8 rounded-full" />
              <div className="flex flex-col leading-tight">
                <span className="font-medium text-black text-sm">
                  Bluetooth
                </span>
                <span className="font-normal text-gray-800 text-[10px]">
                  On
                </span>
              </div>
            </div>
            <ChevronRight
              size={16}
              className="text-black/50 opacity-0 -translate-x-1 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-x-0"
            />
          </span>

          {/* AirDrop */}
          <span className="group px-3 py-3 flex-1 rounded-b-xl hover:bg-white/30 cursor-pointer flex items-center justify-between transition-all duration-200">
            <div className="flex items-center gap-3">
              <Image
                src="/icons/AirDrop-white.svg"
                alt="AirDrop"
                height={32}
                width={32}
                className="p-1.5 bg-blue-600 rounded-full"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-medium text-black text-sm">AirDrop</span>
                <span className="font-normal text-gray-800 text-[10px]">
                  Contacts Only
                </span>
              </div>
            </div>
            <ChevronRight
              size={16}
              className="text-black/50 opacity-0 -translate-x-1 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-x-0"
            />
          </span>
        </div>
        {/* Right half */}
        <div className="flex flex-col flex-1 pl-2 gap-3">
          {/* Focus */}
          <span className="group flex flex-1 items-center gap-3 px-3 py-2 cursor-pointer bg-white/40 hover:bg-white/50 duration-200 transition-all rounded-2xl shadow-[2px_2px_8px_rgba(0,0,0,0.2)]">
            <Image
              src="/icons/Moon.svg"
              height={38}
              width={38}
              alt="Focus"
              className="rounded-full bg-gray-700/30 p-2 transition-colors duration-200"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold text-black">Focus</span>
              <span className="text-[10px] text-black/60">Do not disturb</span>
            </div>
            <ChevronRight
              size={16}
              className="text-black/50 opacity-0 -translate-x-1 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-x-0"
            />
          </span>

          {/* Other Controls */}
          <div className="flex flex-1 gap-3">
            {/* State Manager */}
            <span className="group flex flex-1 flex-col items-center justify-center gap-1.5 rounded-xl bg-white/40 hover:bg-white/50 px-3 py-3 cursor-pointer shadow-[2px_2px_8px_rgba(0,0,0,0.2)] transition-all duration-200">
              <div className="h-9 w-9 rounded-full bg-gray-700/30 flex items-center justify-center">
                <Image
                  src="/icons/StateManager.svg"
                  className="text-black"
                  alt="State Manager"
                  width={24}
                  height={24}
                />
              </div>
              <span className="text-xs font-medium text-black text-center">
                State Manager
              </span>
            </span>

            {/* Screen Mirror */}
            <span className="group flex flex-1 flex-col items-center justify-center gap-1.5 rounded-xl bg-white/40 hover:bg-white/50 px-3 py-3 cursor-pointer shadow-[2px_2px_8px_rgba(0,0,0,0.2)] transition-all duration-200">
              <div className="h-9 w-9 rounded-full bg-gray-700/30 flex items-center justify-center">
                <ScreenShareIcon className="h-4 w-4 text-black" />
              </div>
              <span className="text-xs font-medium text-black text-center">
                Screen Mirror
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Bottom half */}
      <div className="flex flex-col gap-2 rounded-lg">
        {/* Display */}
        <span className="flex flex-col flex-1 justify-center gap-2 p-3 bg-white/40 hover:bg-white/50 transition-all duration-200 rounded-xl shadow-[2px_2px_8px_rgba(0,0,0,0.2)]">
          <span className="font-medium text-black text-sm">Display</span>

          {/* Slider */}
          <div className="relative h-7 w-full cursor-pointer rounded-full border border-gray-500 bg-gray-700/30 flex items-center px-2">
            <Sun className="relative z-1 size-4" fill="gray" stroke="gray" />
            {/* Filled brightness */}
            <div
              className="absolute left-0 top-0 h-full rounded-full bg-white transition-all duration-150"
              style={{ width: `${value}%` }}
            />

            {/* Thumb */}
            <div
              className="absolute top-1/2 -translate-y-1/2 h-7 w-7 border border-gray-400 rounded-full bg-white shadow-[2px_2px_8px_rgba(0,0,0,0.2)]"
              style={{ left: `calc(${value}% - 28px)` }}
            />
          </div>
        </span>

        {/* Sound */}
        <span className="flex flex-col flex-1 justify-center gap-2 p-3 bg-white/40 hover:bg-white/50 transition-all duration-200 rounded-xl shadow-[2px_2px_8px_rgba(0,0,0,0.2)]">
          <span className="font-medium text-black text-sm">Sound</span>

          {/* Slider */}
          <div className="relative h-7 w-full cursor-pointer rounded-full border border-gray-500 bg-gray-700/30 flex items-center px-2">
            <LucideVolume2
              className="relative z-1 size-4"
              fill="gray"
              stroke="gray"
            />
            {/* Filled brightness */}
            <div
              className="absolute left-0 top-0 h-full rounded-full bg-white transition-all duration-150"
              style={{ width: `${value}%` }}
            />

            {/* Thumb */}
            <div
              className="absolute top-1/2 -translate-y-1/2 h-7 w-7 border border-gray-400 rounded-full bg-white shadow-[2px_2px_8px_rgba(0,0,0,0.2)]"
              style={{ left: `calc(${value}% - 28px)` }}
            />
          </div>
        </span>

        {/* Music */}
        <span className="group h-60 flex flex-col gap-3 p-3 rounded-2xl bg-white/20 backdrop-blur-xl shadow-[0_8px_24px_rgba(0,0,0,0.22)] hover:bg-white/30 transition-all duration-200">
          {/* Album Art */}
          <div className="relative w-full aspect-square overflow-hidden rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.25)]">
            <Image
              src="/music/the-they-not-like-us.webp"
              alt="Now Playing"
              fill
              className="object-cover"
            />
          </div>

          {/* Song Info */}
          <div className="flex flex-col px-0.5">
            <span className="text-[13px] font-semibold text-black truncate">
              Not Like Us
            </span>
            <span className="text-[11px] text-black/60 truncate">
              Kendrick Lamar
            </span>
          </div>

          {/* Volume */}
          <div className="relative cursor-pointer w-full h-5 flex items-center">
            {/* Track */}
            <div className="absolute inset-x-0 h-0.75 rounded-full bg-black/20 backdrop-blur-sm" />

            {/* Fill */}
            <div
              className="absolute left-0 h-1 rounded-full bg-white transition-all duration-200"
              style={{ width: `${value}%` }}
            />

            {/* Thumb */}
            <div
              className="absolute top-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-white shadow-[0_3px_8px_rgba(0,0,0,0.35)] ring-1 ring-black/10 transition-transform duration-150 hover:scale-110 active:scale-95"
              style={{ left: `calc(${value}% - 8px)` }}
            />
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-auto opacity-80 group-hover:opacity-100 transition-opacity">
            <button className="h-7 w-7 cursor-pointer rounded-full bg-white/40 hover:bg-white/60 shadow-lg transition duration-200 flex items-center justify-center">
              <SkipBack className="size-3" stroke="black" fill="black" />
            </button>
            <button className="h-9 w-9 cursor-pointer rounded-full bg-white/70 hover:bg-white shadow-lg transition duration-200 flex items-center justify-center text-sm">
              <Play className="size-3" stroke="black" fill="black" />
            </button>
            <button className="h-7 w-7 cursor-pointer rounded-full bg-white/40 hover:bg-white/60 shadow-lg transition duration-200 flex items-center justify-center">
              <SkipForward className="size-3" stroke="black" fill="black" />
            </button>
          </div>
        </span>
      </div>
    </section>
  );
};

export default NavbarControlCenter;
