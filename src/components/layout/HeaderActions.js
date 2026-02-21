import React from 'react';

export default function HeaderActions({ toggleTheme, showFavoritesOnly, setShowFavoritesOnly }) {
  return (
    <>
      <button className="icon-btn" onClick={toggleTheme} title="Toggle Dark Mode">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
      </button>
      <button className={`icon-btn ${showFavoritesOnly ? 'active' : ''}`} onClick={() => setShowFavoritesOnly(!showFavoritesOnly)} title="Show Favorites">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
      </button>
    </>
  );
}