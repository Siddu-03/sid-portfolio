import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, ArrowDownToLine, Mail } from "@/components/icons";
import { ICONS_BY_ID } from "@/lib/iconRegistry";
import { profile } from "@/data/profile";
import { siteConfig } from "@/data/siteConfig";
import { getHeroNameLines } from "@/lib/profile";
import { EASE } from "@/lib/motion";
import { Link } from "react-router-dom";

/**
 * Signature hero: full-bleed cinematic photograph with the name set at
 * extreme scale over a dark gradient overlay. This section intentionally
 * does not follow the site's light/dark theme — it always reads as a dark,
 * image-first moment, the way a photograph with text over it would in any
 * theme, and the rest of the site resumes normal theming right below it.
 *
 * All content is sourced from profile.js. The background image specifically
 * comes only from profile.heroImage / heroImageMobile / heroImageAlt /
 * heroImageFocalPoint — this component never imports or references an
 * image file directly, so replacing the photo never requires touching it.
 */
export function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const parallaxEnabled = siteConfig.enableHeroParallax;
  const imageYRaw = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const contentOpacityRaw = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const imageY = parallaxEnabled ? imageYRaw : 0;
  const contentOpacity = parallaxEnabled ? contentOpacityRaw : 1;

  const { line1, line2 } = getHeroNameLines(profile.displayName);
  const EmailIcon = ICONS_BY_ID.mail ?? Mail;

  // Supports either a single string (same focal point everywhere) or an
  // { default, mobile } object — see profile.js for which one is in use.
  const focalConfig = profile.heroImageFocalPoint;
  const heroFocal =
    typeof focalConfig === "string"
      ? { default: focalConfig, mobile: focalConfig }
      : {
          default: focalConfig?.default ?? "50% 50%",
          mobile: focalConfig?.mobile ?? focalConfig?.default ?? "50% 50%",
        };

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex h-[100svh] min-h-[640px] flex-col overflow-hidden"
    >
      {/* Background photograph. heroImage is an extreme-wide landscape, so
          on narrow viewports we swap to heroImageMobile — the same photo
          pre-cropped closer to a portrait-friendly ratio — via a <picture>
          media query, rather than relying on object-fit: cover alone to
          rescue a crop that's too aggressive to keep the subject in frame.
          Falls back to heroImage everywhere if heroImageMobile is unset. */}
      <motion.div
        style={{
          y: imageY,
          "--hero-focal": heroFocal.mobile,
          "--hero-focal-sm": heroFocal.default,
        }}
        className="absolute inset-0 -top-[8%] h-[116%] w-full"
      >
        <picture>
          {profile.heroImageMobile && (
            <source media="(max-width: 639px)" srcSet={profile.heroImageMobile} />
          )}
          <img
            src={profile.heroImage}
            alt={profile.heroImageAlt}
            className="h-full w-full object-cover [object-position:var(--hero-focal)] sm:[object-position:var(--hero-focal-sm)]"
          />
        </picture>
      </motion.div>

      {/* Dark gradient overlay — heavier over the text-bearing left/top
          area, lighter toward the bottom-right, so the photo still reads
          while every line of text stays legible regardless of the source
          image's own tonality. */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/50 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/25 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative flex flex-1 flex-col justify-center px-[var(--section-pad-x)] pt-20"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
          className="mb-5 flex items-center gap-4 text-sm font-medium uppercase tracking-[0.2em] text-white/70"
        >
          Hello, I&apos;m
          <span className="h-px w-10 bg-white/40" aria-hidden="true" />
        </motion.p>

        <h1 className="select-none font-display font-[600] leading-[0.95] tracking-tight text-white">
          <span className="block overflow-hidden">
            <motion.span
              className="block text-display-1"
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
            >
              {line1}
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block text-display-1"
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}
            >
              {line2}
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.4 }}
          className="mt-3 text-h2 font-[400] text-white/90"
        >
          {profile.title}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}
          className="mt-6 max-w-sm border-l border-white/25 pl-5 text-base leading-relaxed text-white/75"
        >
          {profile.description.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.6 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 rounded-full border border-white/35 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.03] hover:border-white/70 hover:bg-white/10"
          >
            View Projects
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          <a
            href={profile.resume}
            download
            className="group inline-flex items-center gap-2 rounded-full border border-white/35 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.03] hover:border-white/70 hover:bg-white/10"
          >
            <ArrowDownToLine className="h-4 w-4" strokeWidth={1.8} />
            Download Resume
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom chrome: scroll cue (left) and social links (right), both
          sitting directly on the image like the rest of the hero content. */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative flex items-center justify-between px-[var(--section-pad-x)] pb-8"
      >
        <a
          href="#interests"
          className="group inline-flex items-center gap-4 text-xs font-medium uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-white"
        >
          Scroll to explore
          <span className="h-px w-10 bg-white/30 transition-colors group-hover:bg-white/60" aria-hidden="true" />
        </a>

        <div className="flex items-center gap-4">
          {profile.socialLinks.map((link) => {
            const Icon = ICONS_BY_ID[link.icon];
            return (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white/80 transition-colors hover:border-white/60 hover:text-white"
              >
                {Icon && <Icon className="h-4 w-4" strokeWidth={1.8} />}
              </a>
            );
          })}
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white/80 transition-colors hover:border-white/60 hover:text-white"
          >
            <EmailIcon className="h-4 w-4" strokeWidth={1.8} />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="pointer-events-none absolute bottom-24 left-1/2 hidden -translate-x-1/2 sm:block"
        aria-hidden="true"
      >
        <ArrowDown className="h-4 w-4 animate-bounce text-white/40" />
      </motion.div>
    </section>
  );
}
