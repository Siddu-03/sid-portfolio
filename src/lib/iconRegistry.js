import { Mail, Github, Linkedin } from "@/components/icons";

// Lowercase-keyed lookup so data files (e.g. profile.socialLinks) can
// reference an icon by string id without importing components directly.
export const ICONS_BY_ID = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};
