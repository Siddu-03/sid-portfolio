// Shared Framer Motion variants — the single source of truth for the site's
// motion language. Every page imports from here so the feel stays identical.

export const EASE = [0.16, 1, 0.3, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.9, ease: EASE },
  },
};

export const staggerContainer = (staggerDelay = 0.08, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
      delayChildren,
    },
  },
});

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: EASE },
  },
};

// Standard viewport options for scroll-triggered reveals — fires once,
// slightly before fully in view so motion feels anticipatory not laggy.
export const viewportOnce = { once: true, margin: "-10% 0px -10% 0px" };
