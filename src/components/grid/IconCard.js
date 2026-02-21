import React from 'react';

export default function IconCard({ name, path, svgMarkup, size, stroke, color, isA11y, isFav, index, toggleFavorite, copyToClipboard, openModal }) {
  return (
    <div 
      className="icon-card" 
      style={{ animationDelay: `${index * 0.03}s` }}
      role="button" 
      tabIndex="0"
      onClick={() => openModal({ name, path, svgMarkup })}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openModal({ name, path, svgMarkup }) }}
    >
      <button className="copy-btn" onClick={(e) => copyToClipboard(e, svgMarkup, name)}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
      </button>
      
      <svg 
        xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" 
        stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round"
        dangerouslySetInnerHTML={{ __html: isA11y ? `<title>${name} icon</title>${path}` : path }} 
      />
      
      <span className="icon-name">{name}</span>
      <button className={`fav-btn ${isFav ? 'is-fav' : ''}`} onClick={(e) => toggleFavorite(name, e)}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill={isFav ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
      </button>
    </div>
  );
}