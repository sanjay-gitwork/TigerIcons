import React from 'react';

export default function ModalPreview({ data, color, stroke, isA11y }) {
  return (
    <>
      <div className="modal-preview">
        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: isA11y ? `<title>${data.name} icon</title>${data.path}` : data.path }} />
      </div>
      <div className="modal-name">{data.name}</div>
    </>
  );
}