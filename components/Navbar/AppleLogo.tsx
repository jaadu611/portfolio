"use client";

import { useHydrated } from "@/hooks/useHydrated";
import { useTheme } from "next-themes";
import Image from "next/image";

const AppleLogo = () => {
  const { resolvedTheme } = useTheme();

  const hydrated = useHydrated();

  if (!hydrated || !resolvedTheme) return null;

  return (
    <Image
      src={`/icons/apple-logo-${resolvedTheme}.svg`}
      alt="apple-logo"
      height={30}
      width={30}
    />
  );
};

export default AppleLogo;
