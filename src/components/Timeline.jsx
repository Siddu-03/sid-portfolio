import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Timeline({ items }) {
  return (
    <motion.ol
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="relative border-l border-[var(--color-border)]"
    >
      {items.map((entry) => (
        <motion.li key={entry.year} variants={fadeUp} className="relative pb-12 pl-8 last:pb-0">
          <span
            className="absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full bg-[var(--color-ink)]"
            aria-hidden="true"
          />
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.14em] text-[var(--color-ink-soft)]">
            {entry.year}
          </p>
          <h3 className="font-display text-xl font-[700] tracking-tight text-[var(--color-ink)] sm:text-2xl">
            {entry.title}
          </h3>
          <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
            {entry.description}
          </p>
        </motion.li>
      ))}
    </motion.ol>
  );
}
