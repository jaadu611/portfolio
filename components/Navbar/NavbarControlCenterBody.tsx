import {
  Bluetooth,
  ChevronRight,
  LucideVolume2,
  Play,
  ScreenShareIcon,
  SkipBack,
  SkipForward,
  Sun,
  Wifi,
} from "lucide-react";
import Image from "next/image";
import ThemeSwitch from "../ThemeChanger";

const value = "60"; // Temp value for sliders

const NavbarControlCenterBody = () => {
  return (
    <div className="flex flex-col gap-3 p-5">
      {/* Top half */}
      <div className="flex flex-1 rounded-lg gap-1">
        {/* Left half */}
        <div className="flex flex-col flex-1 bg-white/40 dark:bg-white/10 rounded-2xl shadow-[2px_2px_8px_rgba(0,0,0,0.2)]">
          {/* Wi-Fi */}
          <button
            name="Wifi"
            type="button"
            aria-label="Wifi"
            title="Wifi"
            className="group px-3 py-3 flex-1 cursor-pointer hover:bg-white/30 dark:hover:bg-white/15 rounded-t-2xl flex items-center justify-between transition-all duration-200"
          >
            <div className="flex items-center gap-3">
              <Wifi className="bg-blue-600 p-1.5 text-white size-8 rounded-full" />
              <div className="flex flex-col items-start leading-tight">
                <span className="font-medium text-black dark:text-white text-sm">
                  Wi-Fi
                </span>
                <span className="font-normal text-gray-800 dark:text-gray-300 text-[10px]">
                  Socially offline.
                </span>
              </div>
            </div>
            <ChevronRight
              size={16}
              className="text-black/50 dark:text-white/50 opacity-0 -translate-x-1 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-x-0"
            />
          </button>

          {/* Bluetooth */}
          <button
            name="Bluetooth"
            type="button"
            aria-label="Bluetooth"
            title="Bluetooth"
            className="group px-3 py-3 flex-1 cursor-pointer hover:bg-white/30 dark:hover:bg-white/15 flex items-center justify-between transition-all duration-200"
          >
            <div className="flex items-center gap-3 cursor-pointer">
              <Bluetooth className="bg-blue-600 p-1.5 text-white size-8 rounded-full" />
              <div className="flex flex-col items-start leading-tight">
                <span className="font-medium text-black dark:text-white text-sm">
                  Bluetooth
                </span>
                <span className="font-normal text-gray-800 dark:text-gray-300 text-[10px]">
                  On
                </span>
              </div>
            </div>
            <ChevronRight
              size={16}
              className="text-black/50 dark:text-white/50 opacity-0 -translate-x-1 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-x-0"
            />
          </button>

          {/* AirDrop */}
          <button
            name="Contacts"
            type="button"
            aria-label="Contacts"
            title="Contacts"
            className="group px-3 py-3 flex-1 cursor-pointer hover:bg-white/30 dark:hover:bg-white/15 flex rounded-b-2xl items-center justify-between transition-all duration-200"
          >
            <div className="flex items-center gap-3">
              <Image
                src="/icons/AirDrop-white.svg"
                alt="AirDrop"
                height={32}
                width={32}
                className="p-1.5 bg-blue-600 rounded-full"
                loading="lazy"
              />
              <div className="flex flex-col items-start leading-tight">
                <span className="font-medium text-black dark:text-white text-sm">
                  AirDrop
                </span>
                <span className="font-normal text-gray-800 dark:text-gray-300 text-[10px]">
                  Contacts Only
                </span>
              </div>
            </div>
            <ChevronRight
              size={16}
              className="text-black/50 dark:text-white/50 opacity-0 -translate-x-1 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-x-0"
            />
          </button>
        </div>

        {/* Right half */}
        <div className="flex flex-col flex-1 pl-2 gap-3">
          {/* Focus */}
          <span className="group flex flex-1 items-center justify-between px-3 py-2 cursor-pointer bg-white/40 dark:bg-white/15 hover:bg-white/55 dark:hover:bg-white/25 duration-200 transition-all rounded-2xl shadow-[2px_2px_8px_rgba(0,0,0,0.2)]">
            <div className="gap-3 flex">
              <Image
                src="/icons/Moon.svg"
                height={38}
                width={38}
                alt="Focus"
                loading="lazy"
                className="rounded-full bg-gray-700/30 dark:bg-white/20 p-2 transition-colors duration-200"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-semibold text-black dark:text-white">
                  Focus
                </span>
                <span className="text-[10px] text-black/60 dark:text-white/60">
                  Do not disturb
                </span>
              </div>
            </div>
            <ChevronRight
              size={16}
              className="text-black/50 dark:text-white/50 opacity-0 -translate-x-1 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-x-0"
            />
          </span>

          {/* Other controls */}
          <div className="flex flex-1 gap-3">
            <ThemeSwitch />

            <span className="group flex flex-1 flex-col items-center justify-center gap-1.5 rounded-xl bg-white/40 dark:bg-white/15 hover:bg-white/55 dark:hover:bg-white/25 px-3 py-3 cursor-pointer shadow-[2px_2px_8px_rgba(0,0,0,0.2)] transition-all duration-200">
              <div className="h-9 w-9 rounded-full bg-gray-700/30 dark:bg-white/20 flex items-center justify-center">
                <ScreenShareIcon className="h-4 w-4 text-black dark:text-white" />
              </div>
              <span className="text-xs font-medium text-black dark:text-white text-center">
                Screen Mirror
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Bottom half */}
      <div className="flex flex-col gap-3 rounded-lg">
        {/* Display */}
        <span className="flex flex-col flex-1 justify-center gap-2 p-3 bg-white/40 dark:bg-white/15 hover:bg-white/50 dark:hover:bg-white/25 transition-all duration-200 rounded-xl shadow-[2px_2px_8px_rgba(0,0,0,0.2)]">
          <span className="font-medium text-black dark:text-white/90 text-sm">
            Display
          </span>

          {/* Slider */}
          <div className="relative h-7 w-full cursor-pointer rounded-full border border-gray-500/60 dark:border-white/20 bg-gray-700/30 dark:bg-white/10 flex items-center px-2">
            <Sun
              className="relative z-1 size-4 text-black/70 dark:text-gray-800/60"
              fill="currentColor"
              stroke="currentColor"
            />
            <div
              className="absolute left-0 top-0 h-full rounded-full bg-white dark:bg-white/70 transition-all duration-150"
              style={{ width: `${value}%` }}
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 h-7 w-7 border border-gray-400/70 dark:border-white/30 rounded-full bg-white dark:bg-white/90 shadow-[2px_2px_8px_rgba(0,0,0,0.2)]"
              style={{ left: `calc(${value}% - 28px)` }}
            />
          </div>
        </span>

        {/* Sound */}
        <span className="flex flex-col flex-1 justify-center gap-2 p-3 bg-white/40 dark:bg-white/15 hover:bg-white/50 dark:hover:bg-white/25 transition-all duration-200 rounded-xl shadow-[2px_2px_8px_rgba(0,0,0,0.2)]">
          <span className="font-medium text-black dark:text-white/90 text-sm">
            Sound
          </span>

          {/* Slider */}
          <div className="relative h-7 w-full cursor-pointer rounded-full border border-gray-500/60 dark:border-white/20 bg-gray-700/30 dark:bg-white/10 flex items-center px-2">
            <LucideVolume2
              className="relative z-1 size-4 text-black/70 dark:text-gray-800/60"
              fill="currentColor"
              stroke="currentColor"
            />
            <div
              className="absolute left-0 top-0 h-full rounded-full bg-white dark:bg-white/70 transition-all duration-150"
              style={{ width: `${value}%` }}
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 h-7 w-7 border border-gray-400/70 dark:border-white/30 rounded-full bg-white dark:bg-white/90 shadow-[2px_2px_8px_rgba(0,0,0,0.2)]"
              style={{ left: `calc(${value}% - 28px)` }}
            />
          </div>
        </span>

        {/* Music */}
        <span className="group h-60 flex flex-col gap-3 p-3 rounded-2xl bg-white/20 dark:bg-[#3d3161] backdrop-blur-xl shadow-[2px_2px_8px_rgba(0,0,0,0.2)] hover:bg-white/30 dark:hover:bg-[#524772] transition-all duration-200">
          {/* Album Art */}
          <div className="relative w-full aspect-square overflow-hidden rounded-xl">
            <Image
              src="/music/the-they-not-like-us.webp"
              alt="Now Playing"
              loading="lazy"
              fill
              className="object-cover"
            />
          </div>

          {/* Song Info */}
          <div className="flex flex-col px-0.5">
            <span className="text-[13px] font-semibold text-black dark:text-white truncate">
              Not Like Us
            </span>
            <span className="text-[11px] text-black/60 dark:text-white/60 truncate">
              Kendrick Lamar
            </span>
          </div>

          {/* Volume */}
          <div className="relative cursor-pointer w-full h-5 flex items-center">
            <div className="absolute inset-x-0 h-0.75 rounded-full bg-black/20 dark:bg-white/20 backdrop-blur-sm" />
            <div
              className="absolute left-0 h-1 rounded-full bg-white dark:bg-white/80 transition-all duration-200"
              style={{ width: `${value}%` }}
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-white dark:bg-white/90 shadow-[0_3px_8px_rgba(0,0,0,0.35)] ring-1 ring-black/10 dark:ring-white/20 transition-transform duration-150 hover:scale-110 active:scale-95"
              style={{ left: `calc(${value}% - 8px)` }}
            />
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-auto opacity-80 group-hover:opacity-100 transition-opacity">
            <button
              name="Skip back"
              type="button"
              aria-label="Skip back"
              title="Skip back"
              className="h-7 w-7 cursor-pointer rounded-full bg-white/40 dark:bg-white/25 hover:bg-white/60 dark:hover:bg-white/40 shadow-lg transition duration-200 flex items-center justify-center"
            >
              <SkipBack
                className="size-3 text-black dark:text-white"
                stroke="currentColor"
                fill="currentColor"
              />
            </button>
            <button
              name="Play"
              type="button"
              aria-label="Play"
              title="Play"
              className="h-9 w-9 cursor-pointer rounded-full bg-white/70 dark:bg-white/40 hover:bg-white dark:hover:bg-white/60 shadow-lg transition duration-200 flex items-center justify-center text-sm"
            >
              <Play
                className="size-3 text-black dark:text-white"
                stroke="currentColor"
                fill="currentColor"
              />
            </button>
            <button
              name="Skip forward"
              type="button"
              aria-label="Skip forward"
              title="Skip forward"
              className="h-7 w-7 cursor-pointer rounded-full bg-white/40 dark:bg-white/25 hover:bg-white/60 dark:hover:bg-white/40 shadow-lg transition duration-200 flex items-center justify-center"
            >
              <SkipForward
                className="size-3 text-black dark:text-white"
                stroke="currentColor"
                fill="currentColor"
              />
            </button>
          </div>
        </span>
      </div>
    </div>
  );
};

export default NavbarControlCenterBody;
