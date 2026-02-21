import React from 'react';

export default function IconControls({ size, setSize, stroke, setStroke, color, setColor, isA11y, setIsA11y }) {
  return (
    <>
      <label className="control-group"> Size <input type="range" min="16" max="64" value={size} onChange={(e) => setSize(e.target.value)} /> <span>{size}</span> </label>
      <label className="control-group"> Stroke <input type="range" min="0.5" max="3" step="0.5" value={stroke} onChange={(e) => setStroke(e.target.value)} /> <span>{Number(stroke).toFixed(1)}</span> </label>
      <label className="control-group" style={{ gap: '0.5rem' }}> Color <input type="color" value={color} onChange={(e) => setColor(e.target.value)} /> </label>
      
      <label className="control-group" style={{ cursor: 'pointer', borderLeft: '1px solid var(--border-color)', paddingLeft: '1rem', marginLeft: '0.5rem' }} title="Toggle Accessibility attributes"> 
        A11y 
        <label className="toggle-switch">
          <input type="checkbox" checked={isA11y} onChange={(e) => setIsA11y(e.target.checked)} />
          <span className="slider"></span>
        </label>
      </label>
    </>
  );
}