import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <Section className="pt-36">
      <motion.div variants={staggerContainer(0.1)} initial="hidden" animate="visible" className="max-w-3xl">
        <motion.p
          variants={fadeUp}
          className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-ink-soft)]"
        >
          Projects
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="font-display font-[700] leading-[1.02] tracking-tight text-[var(--color-ink)] text-display-2"
        >
          Things I've built, broken, and rebuilt.
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mt-7 text-lede leading-relaxed text-[var(--color-ink-soft)]"
        >
          A mix of finished tools and active experiments — most of them starting
          from a small, specific annoyance rather than a grand plan.
        </motion.p>
      </motion.div>

      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-20 grid gap-x-8 gap-y-20 sm:grid-cols-2"
      >
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} headingLevel="h2" />
        ))}
      </motion.div>
    </Section>
  );
}
