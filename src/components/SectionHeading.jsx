import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

/**
 * Eyebrow + oversized heading + optional lede. This is the single recurring
 * heading pattern used at the top of every section across the site, so the
 * visual rhythm reads as one continuous design language (req. #4).
 */
export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  className,
  as: Heading = "h2",
}) {
  return (
    <motion.div
      variants={staggerContainer(0.12)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <motion.p
          variants={fadeUp}
          className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-ink-soft)]"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.div variants={fadeUp}>
        <Heading className="font-display font-[700] leading-[1.04] tracking-tight text-[var(--color-ink)] text-display-3">
          {title}
        </Heading>
      </motion.div>
      {lede && (
        <motion.p
          variants={fadeUp}
          className="mt-5 text-lede leading-relaxed text-[var(--color-ink-soft)]"
        >
          {lede}
        </motion.p>
      )}
    </motion.div>
  );
}
