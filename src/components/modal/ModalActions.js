import React, { useState } from 'react';
import { downloadPNG, downloadSVG } from '../../utils/exportUtils';

export default function ModalActions({ data, showToast }) {
  const [framework, setFramework] = useState('svg');

  const handleCopyCode = () => {
    let codeToCopy = data.svgMarkup;
    let fwDisplay = "HTML";

    if (framework === 'react') {
      codeToCopy = data.svgMarkup
        .replace(/stroke-width/g, 'strokeWidth').replace(/stroke-linecap/g, 'strokeLinecap')
        .replace(/stroke-linejoin/g, 'strokeLinejoin').replace(/class=/g, 'className=')
        .replace(/aria-hidden/g, 'ariaHidden').replace(/aria-label/g, 'ariaLabel');
      fwDisplay = "React";
    } else if (framework === 'vue') {
      codeToCopy = `<template>\n  ${data.svgMarkup}\n</template>`; fwDisplay = "Vue";
    } else if (framework === 'svelte') {
      codeToCopy = data.svgMarkup.replace('<svg ', '<svg {...$$restProps} '); fwDisplay = "Svelte";
    }

    navigator.clipboard.writeText(codeToCopy).then(() => showToast(`Copied snippet for ${fwDisplay}`));
  };

  return (
    <div className="modal-actions">
      <select className="fw-selector" value={framework} onChange={(e) => setFramework(e.target.value)}>
        <option value="svg">HTML (Standard SVG)</option>
        <option value="react">React / Next.js</option>
        <option value="vue">Vue / Nuxt</option>
        <option value="svelte">SvelteKit</option>
      </select>
      
      <button className="btn btn-primary" onClick={handleCopyCode}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
        Copy Snippet
      </button>
      <button className="btn btn-secondary" onClick={() => { downloadSVG(data.svgMarkup, data.name); showToast(`Downloaded <strong>${data.name}.svg</strong>`); }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
        Download SVG
      </button>
      <button className="btn btn-secondary" onClick={() => { downloadPNG(data.svgMarkup, data.name); showToast(`Downloaded <strong>${data.name}.png</strong>`); }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
        Download PNG
      </button>
    </div>
  );
}