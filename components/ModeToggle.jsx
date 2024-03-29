"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme, theme } = useTheme("dark");

  return (
    <Button
      variant="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="text-black dark:text-white"
    >
      {theme === "dark" ?<Sun /> :<Moon />  }
    </Button>
  );
}
