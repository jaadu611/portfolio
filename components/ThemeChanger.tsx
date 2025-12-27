import { useHydrated } from "@/hooks/useHydrated";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();

  const hydrated = useHydrated();

  if (!hydrated) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      type="button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      title={`Switch to ${isDark ? "light" : "dark"} theme`}
      className="flex flex-1 flex-col items-center justify-center gap-1.5 rounded-xl bg-white/40 dark:bg-white/15 hover:bg-white/55 dark:hover:bg-white/25 px-3 py-3 cursor-pointer shadow-[2px_2px_8px_rgba(0,0,0,0.2)] transition-all duration-200"
    >
      {/* Switch */}
      <div
        className={`relative h-6 w-11 rounded-full transition-colors duration-300 ${
          isDark ? "bg-white/30" : "bg-gray-300"
        }`}
      >
        <span
          className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow-md transition-transform duration-300 flex items-center justify-center ${
            isDark ? "translate-x-5" : ""
          }`}
        >
          {isDark ? (
            <Moon className="h-3 w-3 text-gray-700" />
          ) : (
            <Sun className="h-3 w-3 text-yellow-500" />
          )}
        </span>
      </div>

      <span className="text-xs font-medium text-black dark:text-white/80">
        {isDark ? "Dark" : "Light"}
      </span>
    </button>
  );
}

export default ThemeSwitch;
