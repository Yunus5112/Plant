// Utilities for cleaning up decorative artifacts in the bundled SVG
// Goal: remove confetti-like dots/ellipses without touching the core plant + scanner artwork

const COLORS_TO_HIDE = [
  '#FF0000',
  '#A276FF',
  '#3E59E7',
];

export function sanitizeGetStartedSvg(original: string): string {
  let xml = original;

  xml = xml.replace(/<circle[\s\S]*?<\/circle>/gi, '');
  xml = xml.replace(/<ellipse[\s\S]*?<\/ellipse>/gi, '');

  xml = xml.replace(/style="mix-blend-mode:[^"]*"/gi, '');

  for (const color of COLORS_TO_HIDE) {
    const regex = new RegExp(`fill=\"${color.replace('#', '#?')}\"`, 'gi');
    xml = xml.replace(regex, 'fill="none"');
  }

  return xml;
}
export function sanitizeGetStartedSvgLight(original: string): string {
  let xml = sanitizeGetStartedSvg(original);
  xml = xml.replace(/fill="#?FF0000"/gi, 'fill="#FFA500"');
  xml = xml.replace(/stroke="#?FF0000"/gi, 'stroke="#FFA500"');
  return xml;
}


