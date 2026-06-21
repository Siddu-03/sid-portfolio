import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Github } from "@/components/icons";
import { Section } from "@/components/Section";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { getProjectBySlug, projects } from "@/data/projects";

export function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) return <Navigate to="/projects" replace />;

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <Section className="pt-36">
      <motion.div variants={staggerContainer(0.1)} initial="hidden" animate="visible">
        <motion.div variants={fadeUp}>
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-ink)]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" strokeWidth={1.8} />
            All projects
          </Link>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs font-medium text-[var(--color-ink-soft)]">
            {project.status}
          </span>
          <span className="text-sm text-[var(--color-ink-soft)]">{project.year}</span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="mt-5 font-display font-[700] leading-[1.0] tracking-tight text-[var(--color-ink)] text-display-2"
        >
          {project.title}
        </motion.h1>

        <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-lede leading-relaxed text-[var(--color-ink-soft)]">
          {project.description}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-3">
          {project.links?.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-5 py-2.5 text-sm font-medium text-[var(--color-bg)]"
            >
              <Github className="h-4 w-4" strokeWidth={1.8} />
              View repository
            </a>
          )}
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm text-[var(--color-ink-soft)]">
            {project.stack.join(" · ")}
          </span>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-16 aspect-[16/9] w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]"
          aria-hidden="true"
        />
      </motion.div>

      <div className="mt-20 flex items-center justify-between border-t border-[var(--color-border)] pt-8">
        <span className="text-sm text-[var(--color-ink-soft)]">Next project</span>
        <Link
          to={`/projects/${next.slug}`}
          className="group inline-flex items-center gap-2 font-display text-lg font-[700] tracking-tight text-[var(--color-ink)]"
        >
          {next.title}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </Section>
  );
}
