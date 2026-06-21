import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowDownToLine } from "@/components/icons";
import { profile } from "@/data/profile";
import { siteConfig } from "@/data/siteConfig";
import { getNavItems } from "@/lib/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { Container } from "./Container";
import { cn } from "@/lib/cn";
import { EASE } from "@/lib/motion";

const navItems = getNavItems();

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <Container className="flex h-[72px] items-center justify-between">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className={cn(
              "font-display text-base font-[700] tracking-tight transition-colors duration-300",
              scrolled ? "text-[var(--color-ink)]" : "text-white"
            )}
            aria-label={`${profile.name} — home`}
          >
            {profile.initials}
          </Link>

          <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "relative text-sm font-medium transition-colors duration-300",
                    scrolled
                      ? cn(
                          "text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]",
                          isActive && "text-[var(--color-ink)]"
                        )
                      : cn("text-white/70 hover:text-white", isActive && "text-white")
                  )
                }
              >
                {({ isActive }) => (
                  <span className="relative">
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className={cn(
                          "absolute -bottom-1.5 left-0 right-0 h-px",
                          scrolled ? "bg-[var(--color-ink)]" : "bg-white"
                        )}
                        transition={{ duration: 0.4, ease: EASE }}
                      />
                    )}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={profile.resume}
              download
              className={cn(
                "flex items-center gap-1.5 text-sm font-medium transition-colors duration-300",
                scrolled
                  ? "text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]"
                  : "text-white/70 hover:text-white"
              )}
            >
              Resume
              <ArrowDownToLine className="h-3.5 w-3.5" strokeWidth={1.8} />
            </a>
            {siteConfig.enableThemeToggle && <ThemeToggle forceLight={!scrolled} />}
          </div>

          <div className="flex items-center gap-3 md:hidden">
            {siteConfig.enableThemeToggle && <ThemeToggle forceLight={!scrolled} />}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className={cn(
                "flex h-9 w-9 items-center justify-center transition-colors duration-300",
                scrolled ? "text-[var(--color-ink)]" : "text-white"
              )}
            >
              {open ? <X className="h-5 w-5" strokeWidth={1.8} /> : <Menu className="h-5 w-5" strokeWidth={1.8} />}
            </button>
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="fixed inset-0 z-40 bg-[var(--color-bg)] md:hidden"
          >
            <nav
              aria-label="Mobile"
              className="flex h-full flex-col justify-center gap-2 px-[var(--section-pad-x)]"
            >
              {navItems.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.06 * i, ease: EASE }}
                >
                  <NavLink
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        "block py-3 font-display text-4xl font-[700] tracking-tight",
                        isActive ? "text-[var(--color-ink)]" : "text-[var(--color-ink-soft)]"
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.a
                href={profile.resume}
                download
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.06 * navItems.length, ease: EASE }}
                className="mt-6 flex items-center gap-2 text-base font-medium text-[var(--color-ink-soft)]"
              >
                Download Resume
                <ArrowDownToLine className="h-4 w-4" strokeWidth={1.8} />
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
