// Site-wide settings and feature flags. Toggling a flag here changes
// behavior across the app without touching component code.

export const siteConfig = {
  siteName: "Siddeshwarprasad Portfolio",

  // "dark" | "light" — initial theme before any stored user preference.
  defaultTheme: "dark",

  // Section / route toggles.
  enablePhotography: true,
  enableResearch: true,
  enableBlog: false,

  // Behavior toggles.
  enableHeroParallax: true,
  enableThemeToggle: true,
};
