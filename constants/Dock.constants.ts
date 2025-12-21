// Internal imports
import { WINDOW_CONFIG } from "./Store.constants";

// Dock apps
const dockApps: {
  id: keyof typeof WINDOW_CONFIG;
  name: string;
  icon: string;
  canOpen: boolean;
}[] = [
  {
    id: "finder",
    name: "Portfolio",
    icon: "finder.webp",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles",
    icon: "safari.webp",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery",
    icon: "photos.webp",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contacts",
    icon: "contact.webp",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills",
    icon: "terminal.webp",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive",
    icon: "trash.webp",
    canOpen: false,
  },
];

export { dockApps };
