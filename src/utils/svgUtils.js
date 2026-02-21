export const generateSvgMarkup = (name, path, size, stroke, color, isA11y) => {
  const a11yAttrs = isA11y ? `role="img" aria-label="${name} icon"` : `aria-hidden="true"`;
  const titleTag = isA11y ? `<title>${name} icon</title>` : '';
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round" class="tiger-icon tiger-icon-${name}" ${a11yAttrs}>${titleTag}${path}</svg>`;
};