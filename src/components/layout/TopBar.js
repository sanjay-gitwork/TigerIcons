import React from 'react';
import HeaderBrand from './HeaderBrand';
import HeaderActions from './HeaderActions';
import SearchBar from '../controls/SearchBar';
import IconControls from '../controls/IconControls';
import GlobalActions from '../controls/GlobalActions';

export default function TopBar(props) {
  return (
    <header>
      <div className="header-content">
        <div className="header-left">
          <HeaderBrand />
          <HeaderActions 
            toggleTheme={props.toggleTheme} 
            showFavoritesOnly={props.showFavoritesOnly} 
            setShowFavoritesOnly={props.setShowFavoritesOnly} 
          />
        </div>
        
        <div className="controls">
          <SearchBar searchTerm={props.searchTerm} setSearchTerm={props.setSearchTerm} />
          <IconControls 
            size={props.size} setSize={props.setSize} 
            stroke={props.stroke} setStroke={props.setStroke} 
            color={props.color} setColor={props.setColor} 
            isA11y={props.isA11y} setIsA11y={props.setIsA11y} 
          />
          <GlobalActions handleDownloadZip={props.handleDownloadZip} handleReset={props.handleReset} />
        </div>
      </div>
    </header>
  );
}