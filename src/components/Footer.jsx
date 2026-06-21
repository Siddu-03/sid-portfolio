import { Mail, ArrowUpRight } from "@/components/icons";
import { ICONS_BY_ID } from "@/lib/iconRegistry";
import { profile } from "@/data/profile";
import { getNavItems } from "@/lib/navigation";
import { Container } from "./Container";

const navItems = getNavItems();

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)]">
      <Container className="py-16">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-2xl font-[700] tracking-tight text-[var(--color-ink)]">
              {profile.name}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-soft)]">
              {profile.tagline}
            </p>
          </div>

          <div className="flex flex-wrap gap-12">
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-ink-soft)]">
                Site
              </p>
              <ul className="space-y-2.5">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <a
                      href={item.path}
                      className="text-sm text-[var(--color-ink)] transition-opacity hover:opacity-60"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-ink-soft)]">
                Connect
              </p>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href={`mailto:${profile.email}`}
                    className="group inline-flex items-center gap-1.5 text-sm text-[var(--color-ink)] transition-opacity hover:opacity-60"
                  >
                    <Mail className="h-3.5 w-3.5" strokeWidth={1.8} />
                    Email
                  </a>
                </li>
                {profile.socialLinks.map((link) => {
                  const Icon = ICONS_BY_ID[link.icon];
                  return (
                    <li key={link.id}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center gap-1.5 text-sm text-[var(--color-ink)] transition-opacity hover:opacity-60"
                      >
                        {Icon && <Icon className="h-3.5 w-3.5" strokeWidth={1.8} />}
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-4 border-t border-[var(--color-border)] pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-[var(--color-ink-soft)]">
            © {year} {profile.name}. Built from scratch.
          </p>
          <a
            href="#top"
            className="group inline-flex items-center gap-1 text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-ink)]"
          >
            Back to top
            <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
