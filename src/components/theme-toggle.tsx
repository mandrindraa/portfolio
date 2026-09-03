// Source - https://stackoverflow.com/a/79939414
// Posted by Ifeanyi Chima
// Retrieved 2026-08-25, License - CC BY-SA 4.0

"use client";

import { useTheme } from "@teispace/next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  // Render a placeholder with the same size so server and client agree
  if (!mounted) {
    return <div className="w-9 h-9" aria-hidden="true" />;
  }

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center p-2 transition-colors dark:rounded-full w-9 h-9 hover:bg-muted"
      aria-label={`Switch to ${resolvedTheme === "light" ? "dark" : "light"} mode`}
    >
      {resolvedTheme === "light" ? (
        <Moon
          size={20}
          className="transition-colors text-muted-foreground hover:text-foreground"
        />
      ) : (
        <Sun
          size={20}
          className="transition-colors text-muted-foreground hover:text-foreground"
        />
      )}
    </button>
  );
}
