"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="text-foreground cursor-pointer px-2 py-3"
    >
      {isDark ? (
        <Sun size={24} strokeWidth={2} />
      ) : (
        <Moon size={24} strokeWidth={2} />
      )}
    </button>
  );
}
