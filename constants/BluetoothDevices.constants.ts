import {
  BatteryFull,
  BatteryLow,
  BatteryMedium,
  Headphones,
  Laptop,
  Speaker,
} from "lucide-react";

const devices = [
  {
    name: "Device 1",
    icon: Laptop,
    charge: "50%",
    battery: BatteryMedium,
  },
  {
    name: "Device 2",
    icon: Headphones,
    charge: "20%",
    battery: BatteryLow,
  },
  {
    name: "Device 3",
    icon: Speaker,
    charge: "100%",
    battery: BatteryFull,
  },
];

export default devices;
