// Internal imports
import { navbarLinks } from "@/constants/Navabar.constants";
import NavTime from "./NavTime";
import NavbarButtons from "./NavbarButtons";
import AppleLogo from "./AppleLogo";

// Main Navbar component
const Navbar = () => {
  return (
    // Main Navbar
    <nav className="flex justify-between items-center bg-white/50 dark:bg-black/40 backdrop-blur-3xl py-2 px-5 select-none">
      {/* Left Side of the navbar */}
      <div className="flex items-center max-sm:w-full max-sm:justify-center gap-5">
        {/* Apple Logo */}
        <AppleLogo />

        {/* Header Text */}
        <p className="font-bold text-xl text-black dark:text-white">
          Jaadu&apos;s{" "}
          <span className="bg-linear-to-r from-indigo-800 to-blue-800 dark:from-indigo-400 dark:to-blue-300 bg-clip-text text-transparent">
            Portfolio
          </span>{" "}
          OS
        </p>

        {/* Navbar items */}
        <ul className="flex items-center gap-2 mt-1">
          {navbarLinks.map((navItem) => (
            <li
              key={navItem}
              className="text-sm font-semibold cursor-pointer p-2 rounded-md text-gray-900 hover:bg-white/30 dark:text-gray-100 dark:hover:bg-white/10"
            >
              <p>{navItem}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side of the navbar */}
      <div className="flex items-center max-sm:w-full max-sm:justify-center gap-5">
        {/* Navbar icons */}
        <NavbarButtons />
        <NavTime />
      </div>
    </nav>
  );
};

export default Navbar;
