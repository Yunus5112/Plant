// Utilities for cleaning up decorative artifacts in the bundled SVG
// Goal: remove confetti-like dots/ellipses without touching the core plant + scanner artwork

const COLORS_TO_HIDE = [
  '#FF0000', // bright red confetti
  '#A276FF', // purple confetti
  '#3E59E7', // blue panels seen around decorations
];

/**
 * Remove circles/ellipses and de-emphasize some decorative colors that cause dot artifacts.
 * Non-destructive: leaves other elements intact.
 */
export function sanitizeGetStartedSvg(original: string): string {
  let xml = original;

  // Strip circle/ellipse elements (most confetti are these)
  xml = xml.replace(/<circle[\s\S]*?<\/circle>/gi, '');
  xml = xml.replace(/<ellipse[\s\S]*?<\/ellipse>/gi, '');

  // Remove mix-blend-mode which can create artifacts on some devices
  xml = xml.replace(/style="mix-blend-mode:[^"]*"/gi, '');

  // Neutralize specific decorative fills
  for (const color of COLORS_TO_HIDE) {
    const regex = new RegExp(`fill=\"${color.replace('#', '#?')}\"`, 'gi');
    xml = xml.replace(regex, 'fill="none"');
  }

  return xml;
}

/**
 * Light cleanup + minimal recolor: keep decorative icons visible, only reduce confetti
 * and switch the red badge to orange. Safer than strict removal.
 */
export function sanitizeGetStartedSvgLight(original: string): string {
  let xml = sanitizeGetStartedSvg(original);
  // Recolor pure red fills to orange (sun badge) without touching others
  xml = xml.replace(/fill="#?FF0000"/gi, 'fill="#FFA500"');
  xml = xml.replace(/stroke="#?FF0000"/gi, 'stroke="#FFA500"');
  return xml;
}


