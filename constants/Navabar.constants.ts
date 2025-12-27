import useControlCenterStore from "@/store/controlCenter";

// Navbar links
const navbarLinks: string[] = ["Portfolio", "Contacts", "Projects"];

const useNavbarIcons = () => {
  const { toggleControlCenter } = useControlCenterStore();

  return [
<<<<<<< HEAD
    { name: "Battery", link: "/icons/Battery.svg", onClick: () => {} },
    { name: "Wifi", link: "/icons/Wifi.svg", onClick: () => {} },
    { name: "Search", link: "/icons/Search.svg", onClick: () => {} },
    { name: "User", link: "/icons/User.svg", onClick: () => {} },
    {
      name: "Switch",
      link: "/icons/Switch.svg",
=======
    { name: "Battery", link: "/icons/Battery", onClick: () => {} },
    { name: "Wifi", link: "/icons/Wifi", onClick: () => {} },
    { name: "Search", link: "/icons/Search", onClick: () => {} },
    { name: "User", link: "/icons/User", onClick: () => {} },
    {
      name: "Switch",
      link: "/icons/Switch",
>>>>>>> 1fe523df935f1f8f814d7a5f8e71b31e65f6d6de
      onClick: toggleControlCenter,
    },
  ] as const;
};

export { navbarLinks, useNavbarIcons };
