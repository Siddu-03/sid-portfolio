import { cn } from "@/lib/cn";

export function Container({ children, className }) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1440px] px-[var(--section-pad-x)]",
        className
      )}
    >
      {children}
    </div>
  );
}
