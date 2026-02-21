import React from 'react';

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-wrapper">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search icons or tags..." />
    </div>
  );
}