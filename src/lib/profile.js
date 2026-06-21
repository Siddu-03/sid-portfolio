// Small derived helpers over profile.js. Kept separate from the data file
// itself so profile.js stays pure data, and separate from components so no
// component needs to re-implement this logic.

/**
 * Splits the hero display name into the two visually stacked lines the
 * design relies on. `displayName` is authored as a single unbroken string
 * (e.g. "SIDDESHWARPRASAD"); rather than hardcoding the split inside the
 * component, the break point is configurable here. Pass a space-separated
 * displayName (e.g. "JOHN SMITH") to split on whitespace instead.
 */
export function getHeroNameLines(displayName, splitIndex = 10) {
  const value = String(displayName ?? "").trim();

  if (/\s/.test(value)) {
    const [first, ...rest] = value.split(/\s+/);
    return { line1: first, line2: rest.join(" ") };
  }

  if (value.length <= splitIndex) {
    return { line1: value, line2: "" };
  }

  return { line1: value.slice(0, splitIndex), line2: value.slice(splitIndex) };
}

/**
 * Deterministic visual weight (1-3) for an interest tag, derived from its
 * position in profile.interests. Reproduces the original hand-authored
 * weighting pattern (emphasis on the 1st, 4th, and 7th items) without
 * storing a weight value per item in the data file.
 */
const WEIGHT_PATTERN = [3, 2, 1, 2, 1, 1, 2, 1, 1, 1];

export function getInterestWeight(index) {
  return WEIGHT_PATTERN[index % WEIGHT_PATTERN.length];
}

/**
 * Derives a short display handle from a social profile URL, e.g.
 * "https://github.com/siddeshwarprasad" -> "@siddeshwarprasad". Falls back
 * to the label if the URL can't be parsed, so this never throws on bad data.
 */
export function getSocialHandle(url, fallbackLabel = "") {
  try {
    const { pathname } = new URL(url);
    const segment = pathname.replace(/\/+$/, "").split("/").filter(Boolean).pop();
    return segment ? `@${segment}` : fallbackLabel;
  } catch {
    return fallbackLabel;
  }
}

export function getSocialLink(profile, id) {
  return profile.socialLinks?.find((link) => link.id === id);
}
