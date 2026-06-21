import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { getInterestWeight } from "@/lib/profile";
import { staggerContainer, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/cn";

const weightStyles = {
  1: "text-base sm:text-lg text-[var(--color-ink-soft)]",
  2: "text-lg sm:text-2xl text-[var(--color-ink)]/80",
  3: "text-xl sm:text-3xl text-[var(--color-ink)]",
};

const item = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function InterestTags() {
  return (
    <motion.ul
      variants={staggerContainer(0.05)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="flex flex-wrap items-center gap-x-6 gap-y-4 sm:gap-x-8"
      aria-label="Areas of interest"
    >
      {profile.interests.map((label, index) => (
        <motion.li
          key={label}
          variants={item}
          className={cn(
            "font-display font-[600] tracking-tight transition-opacity hover:opacity-100",
            weightStyles[getInterestWeight(index)] ?? weightStyles[1]
          )}
        >
          {label}
        </motion.li>
      ))}
    </motion.ul>
  );
}
