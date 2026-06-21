import { navigation } from "@/data/navigation";
import { siteConfig } from "@/data/siteConfig";

/**
 * Returns navigation items, excluding any whose `key` maps to a falsy
 * siteConfig flag. Items with no `key` are always included. This is the
 * single place that reconciles navigation.js with siteConfig.js, so
 * components never need to know about feature flags directly.
 */
export function getNavItems() {
  return navigation.filter((item) => !item.key || siteConfig[item.key]);
}
