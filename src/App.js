import React, { useState, useEffect, useMemo, useRef } from 'react';
import './index.css';
import { iconData } from './data/icons';
import { downloadAllZip } from './utils/exportUtils';

import TopBar from './components/layout/TopBar';
import Footer from './components/layout/Footer';
import IconGrid from './components/grid/IconGrid';
import ExportModal from './components/modal/ExportModal';
import Toast from './components/common/Toast';

function App() {
  const [theme, setTheme] = useState('light');
  const [searchTerm, setSearchTerm] = useState('');
  const [size, setSize] = useState(24);
  const [stroke, setStroke] = useState(2);
  const [color, setColor] = useState('#1c1917');
  const [isA11y, setIsA11y] = useState(true);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem('tigerIconFavs')) || [];
  });
  
  const [modalData, setModalData] = useState(null);
  const [toastMsg, setToastMsg] = useState({ show: false, text: '' });
  const toastTimer = useRef(null);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('tigerIconFavs', JSON.stringify(favorites));
  }, [favorites]);

  const showToast = (text) => {
    setToastMsg({ show: true, text });
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => {
      setToastMsg({ show: false, text: '' });
    }, 2500);
  };

  const toggleTheme = () => {
    const isDark = theme === 'dark';
    setTheme(isDark ? 'light' : 'dark');
    if (color === '#1c1917' || color === '#fafaf9') setColor(isDark ? '#1c1917' : '#fafaf9');
  };

  const toggleFavorite = (name, e) => {
    e.stopPropagation();
    if (favorites.includes(name)) {
      setFavorites(favorites.filter(fav => fav !== name));
      showToast(`Removed <strong>${name}</strong>`);
    } else {
      setFavorites([...favorites, name]);
      showToast(`Added <strong>${name}</strong>`);
    }
  };

  const copyToClipboard = (e, markup, name) => {
    e.stopPropagation();
    navigator.clipboard.writeText(markup).then(() => {
      showToast(`Copied <strong>${name}</strong> SVG`);
    });
  };

  const handleReset = () => {
    setSize(24); setStroke(2); setSearchTerm('');
    setColor(theme === 'dark' ? '#fafaf9' : '#1c1917');
    setIsA11y(true); showToast('Settings reset');
  };

  const handleDownloadZip = async () => {
    showToast('Preparing ZIP file...');
    try {
      await downloadAllZip(size, stroke, color, isA11y);
      showToast(`Downloaded <strong>tigericon-pack.zip</strong>`);
    } catch (err) {
      showToast(`Error generating ZIP file.`);
    }
  };

  const filteredIcons = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return Object.entries(iconData).filter(([name, data]) => {
      const matchesSearch = name.includes(term) || data.tags.some(tag => tag.includes(term));
      const matchesFav = !showFavoritesOnly || favorites.includes(name);
      return matchesSearch && matchesFav;
    });
  }, [searchTerm, showFavoritesOnly, favorites]);

  return (
    <>
      <TopBar 
        theme={theme} toggleTheme={toggleTheme} 
        showFavoritesOnly={showFavoritesOnly} setShowFavoritesOnly={setShowFavoritesOnly}
        searchTerm={searchTerm} setSearchTerm={setSearchTerm}
        size={size} setSize={setSize} stroke={stroke} setStroke={setStroke}
        color={color} setColor={setColor} isA11y={isA11y} setIsA11y={setIsA11y}
        handleDownloadZip={handleDownloadZip} handleReset={handleReset}
      />

      <IconGrid 
        filteredIcons={filteredIcons} size={size} stroke={stroke} color={color} isA11y={isA11y}
        favorites={favorites} toggleFavorite={toggleFavorite} copyToClipboard={copyToClipboard}
        openModal={setModalData} showFavoritesOnly={showFavoritesOnly} searchTerm={searchTerm}
      />

      <Footer />

      <ExportModal data={modalData} onClose={() => setModalData(null)} color={color} stroke={stroke} isA11y={isA11y} showToast={showToast} />
      <Toast show={toastMsg.show} text={toastMsg.text} />
    </>
  );
}

export default App;