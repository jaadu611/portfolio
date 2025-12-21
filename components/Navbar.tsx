//External imports
import Image from "next/image";

//Internal imports
import { navbarIcons, navbarLinks } from "@/constants/Navabar.constants";
import NavTime from "./NavTime";

// Main Navbar component
const Navbar = () => {
  return (
    // Main Navbar
    <nav className="flex justify-between items-center bg-white/50 backdrop-blur-3xl py-2 px-5 select-none">
      {/* Left Side of the navbar */}
      <div className="flex items-center max-sm:w-full max-sm:justify-center gap-5">
        {/* Apple Logo */}
        <Image
          src={"/icons/apple-logo.svg"}
          alt="apple-logo"
          height={30}
          width={30}
        />

        {/* Header Text */}
        <p className="font-bold text-xl">
          Jaadu&apos;s{" "}
          <span className="bg-linear-to-r from-indigo-800 to-blue-800 bg-clip-text text-transparent">
            Portfolio
          </span>{" "}
          OS
        </p>

        {/* Navbar items */}
        <ul className="flex items-center gap-2 mt-1">
          {navbarLinks.map((navItem) => (
            <li
              className="text-sm font-semibold cursor-pointer transition-all hover:bg-white/30 p-1 rounded-md"
              key={navItem}
            >
              <p>{navItem}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side of the navbar */}
      <div className="flex items-center max-sm:w-full max-sm:justify-center gap-5">
        {/* Navbar icons */}
        <ul className="flex items-center gap-3">
          {navbarIcons.map((icon) => (
            <button
              className="hover:cursor-pointer hover:bg-white/30 p-1 rounded-md transition-all"
              key={icon.name}
            >
              <Image
                src={icon.link}
                alt={`${icon.name}-logo`}
                height={20}
                width={20}
              />
            </button>
          ))}
        </ul>

        <NavTime />
      </div>
    </nav>
  );
};

export default Navbar;
