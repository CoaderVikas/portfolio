import React from 'react';

function Footer() {
  return (
    <footer style={{
      padding: '10px 0',
      background: '#050816',
      borderTop: '1px solid rgba(145, 94, 255, 0.2)',
      textAlign: 'center',
      color: '#9ca3af'
    }}>
      <p>© {new Date().getFullYear()} Vikas Yadav. Built with React-JS</p>
    </footer>
  );
}

export default Footer;