import useControlCenterStore from "@/store/controlCenter";

// Navbar links
const navbarLinks: string[] = ["Portfolio", "Contacts", "Projects"];

const useNavbarIcons = () => {
  const { toggleControlCenter } = useControlCenterStore();

  return [
    { name: "Battery", link: "/icons/Battery.svg", onClick: () => {} },
    { name: "Wifi", link: "/icons/Wifi.svg", onClick: () => {} },
    { name: "Search", link: "/icons/Search.svg", onClick: () => {} },
    { name: "User", link: "/icons/User.svg", onClick: () => {} },
    {
      name: "Switch",
      link: "/icons/Switch.svg",
      onClick: toggleControlCenter,
    },
  ] as const;
};

export { navbarLinks, useNavbarIcons };
