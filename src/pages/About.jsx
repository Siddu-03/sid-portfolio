import { motion } from "framer-motion";
import { CheckCircle2 } from "@/components/icons";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Timeline } from "@/components/Timeline";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { timeline, futureGoals } from "@/data/timeline";
import { profile } from "@/data/profile";

export function About() {
  return (
    <>
      <Section className="pt-36">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-ink-soft)]"
          >
            About
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-display font-[700] leading-[1.02] tracking-tight text-[var(--color-ink)] text-display-2"
          >
            I like understanding how things break.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-7 text-lede leading-relaxed text-[var(--color-ink-soft)]"
          >
            I'm a student spending most of my time at the intersection of security and
            systems — figuring out where trust quietly fails, and building small tools
            in response. Outside of that, I read more than I should admit to, take
            photographs when I can, and think a lot about how good products are made,
            not just how they're coded.
          </motion.p>
        </motion.div>
      </Section>

      <Section border>
        <SectionHeading
          eyebrow="What I Care About"
          title="A few threads I keep pulling on."
          lede="Not a skills list — more a map of where my attention tends to go."
        />
        <motion.ul
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {profile.interests.map((label) => (
            <motion.li
              key={label}
              variants={fadeUp}
              className="flex items-start gap-3 border-b border-[var(--color-border)] pb-5"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-ink-soft)]" strokeWidth={1.6} />
              <span className="font-display text-lg font-[600] tracking-tight text-[var(--color-ink)]">
                {label}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </Section>

      <Section border>
        <SectionHeading eyebrow="Journey" title="How I got here." />
        <div className="mt-16">
          <Timeline items={timeline} />
        </div>
      </Section>

      <Section border>
        <SectionHeading eyebrow="Looking Ahead" title="What I'm working toward." />
        <motion.ul
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 space-y-6"
        >
          {futureGoals.map((goal, i) => (
            <motion.li key={goal} variants={fadeUp} className="flex gap-5 border-t border-[var(--color-border)] pt-6">
              <span className="font-display text-sm font-[600] text-[var(--color-ink-soft)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="max-w-2xl text-lg leading-relaxed text-[var(--color-ink)]">{goal}</p>
            </motion.li>
          ))}
        </motion.ul>
      </Section>
    </>
  );
}
