import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/cn";

const toneGradients = {
  warm: ["var(--color-ink-soft)", "var(--color-ink)"],
  cool: ["var(--color-ink)", "var(--color-ink-soft)"],
  mono: ["var(--color-ink)", "var(--color-ink)"],
};

/**
 * Editorial grid for src/data/photography.js. `full` entries (index 0, 3 by
 * default) span two columns to create rhythm, mirroring how a printed
 * photo essay alternates spread sizes rather than a uniform thumbnail wall.
 */
export function PhotographyGrid({ items, className }) {
  return (
    <motion.div
      variants={staggerContainer(0.07)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn("grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4", className)}
    >
      {items.map((photo, i) => {
        const spanWide = i % 5 === 0;
        return (
          <motion.figure
            key={photo.id}
            variants={fadeUp}
            className={cn(
              "group relative overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]",
              spanWide ? "col-span-2 aspect-[16/10]" : "col-span-1 aspect-[3/4]"
            )}
          >
            <PhotoPlaceholder tone={photo.tone} title={photo.title} />
            <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-black/55 to-transparent p-4 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm font-medium text-white">{photo.title}</p>
              <p className="text-xs text-white/70">{photo.category}</p>
            </figcaption>
          </motion.figure>
        );
      })}
    </motion.div>
  );
}

function PhotoPlaceholder({ tone, title }) {
  const [from, to] = toneGradients[tone] ?? toneGradients.mono;
  const gradId = `photo-${title.replace(/\s+/g, "-").toLowerCase()}`;
  return (
    <svg
      viewBox="0 0 4 5"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
      role="img"
      aria-label={title}
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={from} stopOpacity="0.5" />
          <stop offset="100%" stopColor={to} stopOpacity="0.18" />
        </linearGradient>
      </defs>
      <rect width="4" height="5" fill={`url(#${gradId})`} />
    </svg>
  );
}
