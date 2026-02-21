import React from 'react';

export default function GlobalActions({ handleDownloadZip, handleReset }) {
  return (
    <>
      <button className="icon-btn" style={{ border: 'none', boxShadow: 'none' }} onClick={handleDownloadZip} title="Download All as ZIP">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
      </button>
      <button className="icon-btn" style={{ border: 'none', boxShadow: 'none' }} onClick={handleReset} title="Reset Settings">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><polyline points="3 3 3 8 8 8"></polyline></svg>
      </button>
    </>
  );
}