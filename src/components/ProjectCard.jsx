import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "@/components/icons";
import { Link } from "react-router-dom";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/cn";

/**
 * Renders any entry from src/data/projects.js. Deliberately agnostic about
 * `type` so future "research" or "venture" entries reuse this exact card
 * without modification (req. #10, #14).
 */
export function ProjectCard({ project, index = 0, headingLevel = "h3" }) {
  const isLight = project.cover?.tone === "light";
  const Heading = headingLevel;

  return (
    <motion.div variants={fadeUp} className="group">
      <Link
        to={`/projects/${project.slug}`}
        className="block focus-visible:outline-none"
        aria-label={`View ${project.title}`}
      >
        <div
          className={cn(
            "relative aspect-[4/3] overflow-hidden rounded-2xl border border-[var(--color-border)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1.5",
            isLight ? "bg-[var(--color-surface-2)]" : "bg-[var(--color-surface)]"
          )}
        >
          <CoverArt index={index} />

          <div className="absolute left-5 top-5 flex items-center gap-2">
            <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)]/70 px-3 py-1 text-xs font-medium text-[var(--color-ink-soft)] backdrop-blur-sm">
              {project.status}
            </span>
          </div>

          <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg)]/70 text-[var(--color-ink)] opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
          </div>
        </div>

        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <Heading className="font-display text-2xl font-[700] tracking-tight text-[var(--color-ink)]">
              {project.title}
            </Heading>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-[var(--color-ink-soft)]">
              {project.summary}
            </p>
          </div>
          <span className="shrink-0 pt-1 text-sm text-[var(--color-ink-soft)]">{project.year}</span>
        </div>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-[var(--color-border)] px-2.5 py-1 text-xs text-[var(--color-ink-soft)]"
            >
              {tech}
            </li>
          ))}
        </ul>
      </Link>

      {project.links?.github && (
        <a
          href={project.links.github}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-ink)]"
        >
          <Github className="h-3.5 w-3.5" strokeWidth={1.8} />
          View repository
        </a>
      )}
    </motion.div>
  );
}

/** Abstract geometric cover art — keeps monochrome palette, varies by index. */
function CoverArt({ index }) {
  const seed = index % 4;
  return (
    <svg
      viewBox="0 0 400 300"
      className="absolute inset-0 h-full w-full opacity-90 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`cover-grad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--color-ink)" stopOpacity="0.06" />
          <stop offset="100%" stopColor="var(--color-ink)" stopOpacity="0.16" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill={`url(#cover-grad-${index})`} />
      {seed === 0 && <circle cx="320" cy="60" r="120" fill="var(--color-ink)" opacity="0.05" />}
      {seed === 1 && <rect x="40" y="180" width="220" height="220" fill="var(--color-ink)" opacity="0.05" />}
      {seed === 2 && (
        <line x1="0" y1="0" x2="400" y2="300" stroke="var(--color-ink)" strokeOpacity="0.08" strokeWidth="140" />
      )}
      {seed === 3 && <ellipse cx="100" cy="240" rx="160" ry="90" fill="var(--color-ink)" opacity="0.06" />}
    </svg>
  );
}
