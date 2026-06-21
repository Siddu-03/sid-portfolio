import { Moon, Sun } from "@/components/icons";
import { useTheme } from "@/hooks/ThemeContext";
import { cn } from "@/lib/cn";

/**
 * `forceLight` overrides border/icon color to white regardless of the
 * active theme — used by the Navbar while it floats transparently over a
 * dark hero image, where theme-aware colors would be illegible.
 */
export function ThemeToggle({ className, forceLight = false }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      className={cn(
        "group relative flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-300",
        forceLight
          ? "border-white/35 text-white hover:bg-white/10"
          : "border-[var(--color-border)] text-[var(--color-ink)] hover:bg-[var(--color-surface)]",
        className
      )}
    >
      <Sun
        className="absolute h-[18px] w-[18px] transition-all duration-300 dark:scale-0 dark:-rotate-90 dark:opacity-0"
        strokeWidth={1.6}
        aria-hidden="true"
      />
      <Moon
        className="absolute h-[18px] w-[18px] scale-0 rotate-90 opacity-0 transition-all duration-300 dark:scale-100 dark:rotate-0 dark:opacity-100"
        strokeWidth={1.6}
        aria-hidden="true"
      />
    </button>
  );
}
