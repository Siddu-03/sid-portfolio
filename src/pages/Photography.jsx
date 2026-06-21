import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { PhotographyGrid } from "@/components/PhotographyGrid";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { photography } from "@/data/photography";

export function Photography() {
  return (
    <Section className="pt-36">
      <motion.div variants={staggerContainer(0.1)} initial="hidden" animate="visible" className="max-w-3xl">
        <motion.p
          variants={fadeUp}
          className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-ink-soft)]"
        >
          Photography
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="font-display font-[700] leading-[1.02] tracking-tight text-[var(--color-ink)] text-display-2"
        >
          A quieter way of looking.
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mt-7 text-lede leading-relaxed text-[var(--color-ink-soft)]"
        >
          No briefs, no deadlines — just light, geometry, and whatever's in front
          of me. This is an early collection; albums and travel sets are on the way.
        </motion.p>
      </motion.div>

      <PhotographyGrid items={photography} className="mt-20" />
    </Section>
  );
}
