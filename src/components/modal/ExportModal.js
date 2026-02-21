import React from 'react';
import ModalPreview from './ModalPreview';
import ModalActions from './ModalActions';

export default function ExportModal({ data, onClose, color, stroke, isA11y, showToast }) {
  if (!data) return null;

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-modal" onClick={onClose}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
        <ModalPreview data={data} color={color} stroke={stroke} isA11y={isA11y} />
        <ModalActions data={data} showToast={showToast} />
      </div>
    </div>
  );
}