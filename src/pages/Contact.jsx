import { motion } from "framer-motion";
import { Mail, ArrowDownToLine } from "@/components/icons";
import { ICONS_BY_ID } from "@/lib/iconRegistry";
import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { profile } from "@/data/profile";
import { getSocialHandle } from "@/lib/profile";

function getContactLinks() {
  const email = {
    id: "email",
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: Mail,
  };

  const social = profile.socialLinks.map((link) => ({
    id: link.id,
    label: link.label,
    value: link.handle ?? getSocialHandle(link.url, link.label),
    href: link.url,
    Icon: ICONS_BY_ID[link.icon],
  }));

  return [email, ...social];
}

export function Contact() {
  const links = getContactLinks();

  return (
    <Section className="pt-36">
      <div className="grid gap-16 lg:grid-cols-[1fr_1fr]">
        <motion.div variants={staggerContainer(0.1)} initial="hidden" animate="visible">
          <motion.p
            variants={fadeUp}
            className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-ink-soft)]"
          >
            Contact
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-display font-[700] leading-[1.0] tracking-tight text-[var(--color-ink)] text-display-2"
          >
            Say hello.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-md text-lede leading-relaxed text-[var(--color-ink-soft)]"
          >
            Open to research opportunities, interesting collaborations, or just
            a good conversation about security and systems.
          </motion.p>

          <motion.ul variants={fadeUp} className="mt-10 space-y-5">
            {links.map(({ id, label, value, href, Icon }) => (
              <li key={id}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex items-center gap-3 text-[var(--color-ink)]"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] transition-colors group-hover:bg-[var(--color-surface)]">
                    {Icon && <Icon className="h-4 w-4" strokeWidth={1.8} />}
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.12em] text-[var(--color-ink-soft)]">
                      {label}
                    </span>
                    <span className="font-medium">{value}</span>
                  </span>
                </a>
              </li>
            ))}
          </motion.ul>

          <motion.a
            variants={fadeUp}
            href={profile.resume}
            download
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm font-medium text-[var(--color-ink)] transition-colors hover:bg-[var(--color-surface)]"
          >
            Download Resume
            <ArrowDownToLine className="h-4 w-4" strokeWidth={1.8} />
          </motion.a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8"
        >
          <ContactForm />
        </motion.div>
      </div>
    </Section>
  );
}
