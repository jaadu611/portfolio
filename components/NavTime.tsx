"use client";

//External imports
import dayjs from "dayjs";
import { useEffect, useState } from "react";

const NavTime = () => {
  // Mounted state
  const [mounted, setMounted] = useState(false);
  //Time state
  const [time, setTime] = useState(dayjs());

  //Update time every 60 sec
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);

    const interval = setInterval(() => {
      setTime(dayjs());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;
  return (
    //Time and Date
    <time className="cursor-pointer transition-all hover:bg-white/30 p-1 rounded-md font-medium">
      {time.format("ddd MM D h:mm A")}
    </time>
  );
};

export default NavTime;
