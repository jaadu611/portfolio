// Internal imports
import { WINDOW_CONFIG } from "./Store.constants";

// Dock apps
const dockApps: {
  id: keyof typeof WINDOW_CONFIG;
  name: string;
  icon: string;
}[] = [
  {
    id: "finder",
    name: "Portfolio",
    icon: "finder.webp",
  },
  {
    id: "safari",
    name: "Articles",
    icon: "safari.webp",
  },
  {
    id: "photos",
    name: "Gallery",
    icon: "photos.webp",
  },
  {
    id: "contact",
    name: "Contacts",
    icon: "contact.webp",
  },
  {
    id: "terminal",
    name: "Skills",
    icon: "terminal.webp",
  },
  {
    id: "trash",
    name: "Archive",
    icon: "trash.webp",
  },
];

export { dockApps };
