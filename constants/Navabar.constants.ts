import useControlCenterStore from "@/store/controlCenter";

// Navbar links
const navbarLinks: string[] = ["Portfolio", "Contacts", "Projects"];

const useNavbarIcons = () => {
  const { toggleControlCenter } = useControlCenterStore();

  return [
    { name: "Battery", link: "/icons/Battery", onClick: () => {} },
    { name: "Wifi", link: "/icons/Wifi", onClick: () => {} },
    { name: "Search", link: "/icons/Search", onClick: () => {} },
    { name: "User", link: "/icons/User", onClick: () => {} },
    {
      name: "Switch",
      link: "/icons/Switch",
      onClick: toggleControlCenter,
    },
  ] as const;
};

export { navbarLinks, useNavbarIcons };
