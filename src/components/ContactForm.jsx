import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "@/components/icons";
import { EASE } from "@/lib/motion";

export function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | submitting | sent
  const [errors, setErrors] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      message: form.message.value.trim(),
    };

    const nextErrors = {};
    if (!data.name) nextErrors.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) nextErrors.email = "Enter a valid email.";
    if (!data.message) nextErrors.message = "Write a short message.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    // Placeholder submit — wire to a form backend or mail API when ready.
    setTimeout(() => setStatus("sent"), 700);
  }

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="flex items-center gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-ink)] text-[var(--color-bg)]">
          <Check className="h-4 w-4" strokeWidth={2} />
        </span>
        <div>
          <p className="font-medium text-[var(--color-ink)]">Message sent.</p>
          <p className="text-sm text-[var(--color-ink-soft)]">Thanks for reaching out — I'll reply soon.</p>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" name="name" type="text" error={errors.name} autoComplete="name" />
        <Field label="Email" name="email" type="email" error={errors.email} autoComplete="email" />
      </div>
      <Field
        label="Message"
        name="message"
        as="textarea"
        rows={5}
        error={errors.message}
        placeholder="What would you like to talk about?"
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-6 py-3 text-sm font-medium text-[var(--color-bg)] transition-opacity disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
        {status !== "submitting" && (
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        )}
      </button>
    </form>
  );
}

function Field({ label, name, type = "text", as = "input", error, ...rest }) {
  const Component = as;
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-[var(--color-ink)]">
        {label}
      </label>
      <Component
        id={name}
        name={name}
        type={as === "input" ? type : undefined}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-[var(--color-ink)] outline-none transition-colors placeholder:text-[var(--color-ink-soft)]/60 focus:border-[var(--color-ink)]"
        {...rest}
      />
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-xs text-[var(--color-ink-soft)]">
          {error}
        </p>
      )}
    </div>
  );
}
