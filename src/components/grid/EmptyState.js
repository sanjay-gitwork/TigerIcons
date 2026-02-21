import React from 'react';

export default function EmptyState({ showFavoritesOnly, searchTerm }) {
  return (
    <div id="empty-state" style={{ display: 'block' }}>
      <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--text-muted)' }}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
      <h3>{showFavoritesOnly ? "No favorites found" : "No icons found"}</h3>
      <p>{showFavoritesOnly && !searchTerm ? "Star some icons to see them here." : "Try tweaking your search term."}</p>
    </div>
  );
}