// Navigation items shown in the desktop nav and mobile slide menu.
// `key` maps to a siteConfig feature flag (see siteConfig.js) — when that
// flag is false, the item is filtered out automatically by getNavItems().
// Items with no `key` are always shown.

export const navigation = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Photography", path: "/photography", key: "enablePhotography" },
  { label: "Contact", path: "/contact" },
];

// Future sections can be appended here without touching the Navbar —
// e.g. { label: "Writing", path: "/writing", key: "enableBlog" }
