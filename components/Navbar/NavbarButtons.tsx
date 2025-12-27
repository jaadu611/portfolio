"use client";

// External imports
import { useTheme } from "next-themes";
import Image from "next/image";

//Internal imports
import { useNavbarIcons } from "@/constants/Navabar.constants";
import { useHydrated } from "@/hooks/useHydrated";

const NavbarButtons = () => {
  const navbarIcons = useNavbarIcons();
  const { resolvedTheme } = useTheme();

  const hydrated = useHydrated();

  if (!hydrated || !resolvedTheme) return null;

  return (
    <ul className="flex items-center gap-3">
      {navbarIcons.map((icon) => (
        <li key={icon.name}>
          <button
            name={`${icon.name}-button`}
            type="button"
            aria-label={icon.name}
            title={icon.name}
            onClick={icon.onClick}
            className="hover:cursor-pointer flex gap-3 text-md font-semibold hover:bg-white/30 dark:hover:bg-white/10 p-2 rounded-md"
          >
            {icon.name === "Battery" && <span className="mt-0.5">101%</span>}
            <Image
              src={`${icon.link}-${resolvedTheme}.svg`}
              alt={`${icon.name}-logo`}
              height={20}
              width={20}
            />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default NavbarButtons;
