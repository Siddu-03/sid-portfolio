// Projects data. Each entry drives both the grid card and (in future) a detail view.
// `type` allows the same rendering pattern to later support "research", "publication",
// or "venture" entries without changing the ProjectCard component.

export const projects = [
  {
    slug: "qr-shield",
    title: "QR Shield",
    type: "project",
    status: "In Progress",
    year: "2026",
    summary:
      "A lightweight scanner that flags malicious or spoofed QR codes before they're opened, built after noticing how easily trust gets exploited in something this small.",
    description:
      "QR Shield inspects a code's destination before the device ever loads it — checking the URL against known phishing patterns, redirect chains, and domain age. The goal is a tool that feels invisible when a code is safe, and impossible to miss when it isn't.",
    stack: ["Python", "Computer Vision", "Heuristic Analysis"],
    links: { github: "https://github.com/siddeshwarprasad/qr-shield" },
    cover: { tone: "light" },
  },
  {
    slug: "study-hub",
    title: "Study Hub",
    type: "project",
    status: "Active",
    year: "2025",
    summary:
      "A calmer place to plan coursework — spaced repetition, shared notes, and a workload view that doesn't make studying feel like another job.",
    description:
      "Study Hub started as a way to track my own semester and turned into something a few classmates now use. It combines a spaced-repetition review queue with a shared notes layer, so revising for an exam means returning to material at the right moment instead of cramming the night before.",
    stack: ["React", "Node.js", "PostgreSQL"],
    links: { github: "https://github.com/siddeshwarprasad/study-hub" },
    cover: { tone: "dark" },
  },
  {
    slug: "echo",
    title: "E.C.H.O",
    type: "project",
    status: "Concept / Development",
    year: "2026",
    summary:
      "Early Cyber Hazard Observer — an experiment in surfacing unusual network behaviour in plain language, before it becomes an incident.",
    description:
      "E.C.H.O is an attempt to make early-stage anomaly detection legible to someone who isn't watching dashboards all day. Rather than another alert feed, it tries to describe what changed and why it might matter, in the same tone a calm colleague would use.",
    stack: ["Python", "Network Analysis", "Machine Learning"],
    links: { github: "https://github.com/siddeshwarprasad/echo" },
    cover: { tone: "dark" },
  },
  {
    slug: "substrate",
    title: "Substrate",
    type: "project",
    status: "Concept",
    year: "2026",
    summary:
      "A thinking ground for combining research notes, code experiments, and half-formed ideas in one continuous workspace.",
    description:
      "Substrate is still mostly a sketchbook — a response to how scattered research ends up across browser tabs, notebooks, and repos. The idea is a single surface where a note, a snippet, and a citation can sit next to each other without losing context.",
    stack: ["TypeScript", "Local-first Storage"],
    links: { github: "https://github.com/siddeshwarprasad/substrate" },
    cover: { tone: "light" },
  },
];

// Convenience selectors — keeps page components free of filtering logic.
export const featuredProjects = projects.slice(0, 4);
export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug);
