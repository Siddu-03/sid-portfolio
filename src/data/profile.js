// Personal information. Every piece of personal/identity content displayed
// anywhere on the site should be sourced from this file.

export const profile = {
  name: "Siddeshwarprasad K R",
  shortName: "Siddeshwarprasad",
  initials: "SK",
  // Rendered at extreme scale in the hero. Kept as a single string and split
  // into display lines by the Hero component (see lib/profile.js) so there is
  // no hardcoded name text inside the component itself.
  displayName: "SIDDESHWARPRASAD",
  title: "Student",
  location: "Bengaluru, India",
  tagline: "Exploring cybersecurity, research, technology, and design.",
  // Same copy as `tagline`, kept as line fragments for any future layout
  // that wants explicit line breaks instead of natural CSS wrapping. The
  // current hero renders `tagline` as flowing text, so this isn't consumed
  // by HeroSection today — swap which one Hero reads if that's preferred.
  description: [
    "Exploring cybersecurity,",
    "research,",
    "technology,",
    "and design.",
  ],

  // The Hero component must only ever consume these heroImage* fields —
  // never reference an image file directly. Swapping the photo is just:
  // 1) drop new file(s) in public/assets/hero/, 2) point these at them
  //    (as absolute paths, e.g. "/assets/hero/my-photo.jpg").
  // Rendered full-bleed behind the hero text with object-fit: cover, so
  // both landscape and portrait source photos work — cover crops to fill,
  // it never letterboxes or distorts. A dark gradient overlay (handled in
  // CSS, not stored here) keeps text readable regardless of the image.
  heroImage: "/assets/hero/hero.jpg",
  // Optional dedicated crop for narrow viewports. This specific photo is an
  // extreme-wide landscape (2.2:1) — object-fit: cover on a tall phone
  // viewport would crop away most of its width and cut off the outstretched
  // arms that are the whole point of the shot. heroImageMobile is the same
  // photo, pre-cropped to ~1.24:1 so the full figure survives the crop.
  // If omitted, HeroSection falls back to heroImage on every breakpoint.
  heroImageMobile: "/assets/hero/hero-mobile.jpg",
  heroImageAlt: "Siddeshwarprasad standing on a rocky mountain summit with arms outstretched, overlooking a vast green valley under a cloudy sky",
  // CSS object-position for the hero background image. Two values because
  // heroImage and heroImageMobile have different aspect ratios — tune
  // either if a future photo needs different framing.
  heroImageFocalPoint: {
    default: "50% 38%",
    mobile: "50% 30%",
  },

  email: "siddeshwarprasadkr@gmail.com",
  resume: "/resume.pdf",

  // Flat list, in display order. The visual weighting/variation seen on the
  // Home and About pages is derived deterministically from this order (see
  // lib/profile.js) rather than stored per-item, so adding/removing/reordering
  // an interest here is the only thing ever required.
  interests: [
    "Cybersecurity",
    "Research",
    "Systems",
    "Photography",
    "Physics",
    "Space",
    "Product Design",
    "Books",
    "Applied Cryptography",
    "Human-Computer Interaction",
  ],

  // Each entry's `icon` key maps to a component exported from
  // src/components/icons.jsx. `handle` is the display text shown on the
  // Contact page (e.g. "@username" or a full name); if omitted, it's
  // derived from the URL's last path segment. Add a platform by adding an
  // entry here — Footer and Contact both render this list, no component
  // edits needed.
  socialLinks: [
    { id: "github", label: "GitHub", url: "https://github.com/Siddu-03", icon: "github" },
    {
      id: "linkedin",
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/siddeshwarprasadkr/",
      icon: "linkedin",
      handle: "Siddeshwarprasad K R",
    },
  ],
};
