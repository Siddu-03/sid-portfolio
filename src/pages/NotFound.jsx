import { Link } from "react-router-dom";
import { ArrowLeft } from "@/components/icons";
import { Section } from "@/components/Section";

export function NotFound() {
  return (
    <Section className="flex min-h-[70vh] flex-col items-start justify-center pt-36">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-ink-soft)]">404</p>
      <h1 className="mt-4 font-display font-[700] leading-[1.0] tracking-tight text-[var(--color-ink)] text-display-3">
        This page doesn't exist.
      </h1>
      <p className="mt-5 max-w-md text-lede leading-relaxed text-[var(--color-ink-soft)]">
        The link might be broken, or the page may have moved.
      </p>
      <Link
        to="/"
        className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-ink)]"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" strokeWidth={1.8} />
        Back to home
      </Link>
    </Section>
  );
}
