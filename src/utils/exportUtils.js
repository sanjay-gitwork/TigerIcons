import JSZip from 'jszip';
import { iconData } from '../data/icons';
import { generateSvgMarkup } from './svgUtils';

export const downloadSVG = (svgString, filename) => {
  const blob = new Blob([svgString], { type: 'image/svg+xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${filename}.svg`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

export const downloadPNG = (svgString, filename, size = 512) => {
  const img = new Image();
  const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(svgBlob);
  
  img.onload = () => {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    
    canvas.toBlob((pngBlob) => {
      const pngUrl = URL.createObjectURL(pngBlob);
      const a = document.createElement('a');
      a.href = pngUrl;
      a.download = `${filename}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(pngUrl);
      URL.revokeObjectURL(url);
    }, 'image/png');
  };
  img.src = url;
};

export const downloadAllZip = async (size, stroke, color, isA11y) => {
  const zip = new JSZip();
  
  for (const [name, data] of Object.entries(iconData)) {
    const svgMarkup = generateSvgMarkup(name, data.path, size, stroke, color, isA11y);
    zip.file(`${name}.svg`, svgMarkup);
  }

  const content = await zip.generateAsync({ type: "blob" });
  const url = URL.createObjectURL(content);
  const a = document.createElement('a');
  a.href = url;
  a.download = "tigericon-pack.zip";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};