import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "@/components/icons";
import { HeroSection } from "@/components/HeroSection";
import { InterestTags } from "@/components/InterestTags";
import { ProjectCard } from "@/components/ProjectCard";
import { PhotographyGrid } from "@/components/PhotographyGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { Section } from "@/components/Section";
import { staggerContainer, viewportOnce, fadeUp } from "@/lib/motion";
import { featuredProjects } from "@/data/projects";
import { photographyPreview } from "@/data/photography";
import { siteConfig } from "@/data/siteConfig";

export function Home() {
  return (
    <>
      <HeroSection />

      <Section id="interests" border>
        <p className="mb-8 text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-ink-soft)]">
          Currently curious about
        </p>
        <InterestTags />
      </Section>

      <Section border>
        <SectionHeading
          eyebrow="Selected Work"
          title="A few things I've built."
          lede="Mostly security-leaning tools made to solve a problem I actually had — some finished, some still in progress."
        />
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2"
        >
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </motion.div>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className="mt-14">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-[var(--color-ink)]"
          >
            View all projects
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </Section>

      {siteConfig.enablePhotography && (
        <Section border>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Behind the Lens"
              title="A quieter way of looking."
              lede="Photography is where I slow down — the same attention to detail, pointed somewhere with no deadline."
              className="max-w-xl"
            />
            <Link
              to="/photography"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-[var(--color-ink)]"
            >
              View gallery
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
          <PhotographyGrid items={photographyPreview} className="mt-16" />
        </Section>
      )}

      <Section border>
        <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Get in Touch"
            title="Let's talk about something interesting."
            className="max-w-xl"
          />
          <Link
            to="/contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-[var(--color-ink)] px-6 py-3 text-sm font-medium text-[var(--color-bg)] transition-transform duration-300 hover:-translate-y-0.5"
          >
            Say hello
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
          </Link>
        </div>
      </Section>
    </>
  );
}
