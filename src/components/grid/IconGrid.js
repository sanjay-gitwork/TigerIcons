import React from 'react';
import IconCard from './IconCard';
import EmptyState from './EmptyState';
import { generateSvgMarkup } from '../../utils/svgUtils';

export default function IconGrid({ 
  filteredIcons, size, stroke, color, isA11y, favorites, 
  toggleFavorite, copyToClipboard, openModal, showFavoritesOnly, searchTerm 
}) {
  return (
    <main>
      <div className="grid">
        {filteredIcons.map(([name, data], i) => {
          const isFav = favorites.includes(name);
          const svgMarkup = generateSvgMarkup(name, data.path, size, stroke, color, isA11y);
          
          return (
            <IconCard 
              key={name} name={name} path={data.path} svgMarkup={svgMarkup}
              size={size} stroke={stroke} color={color} isA11y={isA11y}
              isFav={isFav} index={i} toggleFavorite={toggleFavorite}
              copyToClipboard={copyToClipboard} openModal={openModal}
            />
          );
        })}
      </div>
      
      {filteredIcons.length === 0 && (
        <EmptyState showFavoritesOnly={showFavoritesOnly} searchTerm={searchTerm} />
      )}
    </main>
  );
}