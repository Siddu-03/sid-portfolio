// lucide-react dropped short aliases for common names (Mail, Menu, X, Sun,
// Moon, etc.) and removed brand/logo icons entirely in recent major versions.
// This file is the single place that absorbs that — every component imports
// icons from here instead of "lucide-react" directly, so a future library
// upgrade only needs a fix in one spot.

export {
  LucideMoon as Moon,
  LucideSun as Sun,
  LucideMail as Mail,
  LucideMenu as Menu,
  LucideX as X,
  ArrowDown,
  ArrowDownToLine,
  ArrowLeft,
  ArrowUpRight,
  Check,
  CheckCircle2,
} from "lucide-react";

export function Github(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.016-2.04-3.338.724-4.043-1.61-4.043-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.49.997.108-.776.42-1.305.763-1.605-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.468-2.382 1.236-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.323 3.302 1.23A11.5 11.5 0 0 1 12 5.803c1.02.005 2.047.138 3.005.404 2.292-1.552 3.298-1.23 3.298-1.23.655 1.653.243 2.873.12 3.176.77.84 1.234 1.912 1.234 3.222 0 4.61-2.805 5.625-5.476 5.92.43.37.814 1.103.814 2.222 0 1.605-.015 2.898-.015 3.293 0 .322.216.696.825.578C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12Z" />
    </svg>
  );
}

export function Linkedin(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.025-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.477-.9 1.637-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z" />
    </svg>
  );
}
