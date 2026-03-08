"use client";

import Particles from "@/components/ui/particles";
import { useTheme } from "next-themes";

export const BackgroundPattern = () => {
  const { resolvedTheme } = useTheme();
  const isLightTheme = resolvedTheme === "light";

  return (
    <>
      <Particles
        className="absolute inset-0"
        quantity={500}
        ease={60}
        color={isLightTheme ? "#000" : "#fff"}
        refresh
      />
    </>
  );
};
