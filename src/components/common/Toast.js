import React from 'react';

export default function Toast({ show, text }) {
  return (
    <div id="toast" className={show ? 'show' : ''} role="alert">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
      <span dangerouslySetInnerHTML={{ __html: text }}></span>
    </div>
  );
}