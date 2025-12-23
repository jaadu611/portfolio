"use client";

import { useNavbarIcons } from "@/constants/Navabar.constants";
import Image from "next/image";

const NavbarButtons = () => {
  const navbarIcons = useNavbarIcons();
  return (
    <ul className="flex items-center gap-3">
      {navbarIcons.map((icon) => (
        <button
          key={icon.name}
          onClick={icon.onClick}
          className="hover:cursor-pointer flex gap-3 text-md font-semibold hover:bg-white/30 p-1 rounded-md transition-all"
        >
          {icon.name === "Battery" && <span className="mt-0.5">101%</span>}
          <Image
            src={icon.link}
            alt={`${icon.name}-logo`}
            height={20}
            width={20}
          />
        </button>
      ))}
    </ul>
  );
};

export default NavbarButtons;
