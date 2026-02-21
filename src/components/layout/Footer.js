import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div>&copy; {new Date().getFullYear()} TigerIcon. Crafted for the modern web.</div>
        <div className="footer-links">
          {/* <a href="#">GitHub</a>
          <a href="#">Docs</a> */}
        </div>
      </div>
    </footer>
  );
}