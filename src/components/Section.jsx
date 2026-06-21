import { cn } from "@/lib/cn";
import { Container } from "./Container";

/**
 * Every page section uses this wrapper so vertical rhythm, max-width, and
 * horizontal padding stay identical site-wide (req. #4: shared spacing system).
 */
export function Section({ children, className, containerClassName, id, border = false }) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-[var(--section-pad-y)]",
        border && "border-t border-[var(--color-border)]",
        className
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
